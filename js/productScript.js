// script.js - Purani file ko clear karke ye poora code paste karein
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

let allImagesList = []; 
let currentImgIndex = 0;

console.log("Checking ID:", productId);

if (productId && typeof inventory !== 'undefined' && inventory[productId]) {
    const p = inventory[productId];
    
    document.getElementById('p-name').innerText = p.name;
    allImagesList = [p.mainImg, ...p.extraImages];
    
    // Main Image setup aur click event
    const mainImgTag = document.querySelector('#main-img img');
    if(mainImgTag) {
        mainImgTag.src = p.mainImg;
        mainImgTag.style.cursor = "pointer";
        
        mainImgTag.addEventListener('click', function(e) {
            e.preventDefault(); 
            openViewer(0);
        });
    }
    
    document.getElementById('p-type').innerHTML = `<b>Type:</b> ${p.type}`;
    document.getElementById('p-box').innerHTML = `<b>in box:</b> ${p.inBox}`;
    document.getElementById('p-location').innerHTML = `<b>Location:</b> ${p.location}`;
    document.getElementById('p-material').innerHTML = `<b>Material:</b> ${p.material}`;

    const container = document.getElementById('extra-img-container');
    container.innerHTML = ""; 
    
    p.extraImages.forEach((imgSrc, index) => {
        const actualIndex = index + 1; 
        container.innerHTML += `
            <div class="img-frame2" style="cursor:pointer;" onclick="openViewer(${actualIndex})">
                <img src="${imgSrc}" alt="view">
            </div>`;
    });
} else {
    console.log("Error: Data nahi mila ya ID galat hai!");
}

/* ==========================================
   FLIPKART STYLE LIGHTBOX + SWIPE LOGIC
   ========================================== */

function openViewer(index) {
    currentImgIndex = index;
    const modal = document.getElementById('image-viewer-modal');
    const modalImg = document.getElementById('modal-target-img');
    
    let thumbPath = allImagesList[currentImgIndex];
    let originalPath = thumbPath.replace('/thumbnails/', '/images/');
    
    modalImg.src = originalPath; 
    modal.style.display = "flex"; 
    
    // Check karein ki pehli ya aakhri image toh nahi hai
    updateButtonsVisibility();
}

function closeViewer() {
    document.getElementById('image-viewer-modal').style.display = "none";
}

function changeViewerImage(direction) {
    let nextIndex = currentImgIndex + direction;
    
    // Agar images khatam ho jayein toh aage badhne se rokein
    if (nextIndex < 0 || nextIndex >= allImagesList.length) {
        return; 
    }
    
    currentImgIndex = nextIndex;
    
    let thumbPath = allImagesList[currentImgIndex];
    let originalPath = thumbPath.replace('/thumbnails/', '/images/');
    
    document.getElementById('modal-target-img').src = originalPath;
    
    // Button ki visibility update karein
    updateButtonsVisibility();
}

// ---- Buttons ko Chupane/Dikhane ka Logic ----
function updateButtonsVisibility() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        // Agar pehli image hai toh Left button hide karein
        if (currentImgIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
        
        // Agar aakhri image hai toh Right button hide karein
        if (currentImgIndex === allImagesList.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }
}

// ---- Mobile Touch Swipe Support ----
let touchStartX = 0;
let touchEndX = 0;

const swipeArea = document.getElementById('swipe-area');

if (swipeArea) {
    swipeArea.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    swipeArea.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
}

function handleSwipe() {
    const swipeThreshold = 50; 
    if (touchEndX < touchStartX - swipeThreshold) {
        changeViewerImage(1); // Swipe Left -> Next Image
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        changeViewerImage(-1); // Swipe Right -> Prev Image
    }
}

// Keyboard Support
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('image-viewer-modal');
    if (modal && modal.style.display === "flex") {
        if (e.key === "ArrowLeft") changeViewerImage(-1);
        if (e.key === "ArrowRight") changeViewerImage(1);
        if (e.key === "Escape") closeViewer();
    }
});

