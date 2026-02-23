// < =======================================================
// < Imports
// < =======================================================

import * as tools from "./tools.js";
import * as alpha from "./alpha.js";

// < =======================================================
// < Declarations
// < =======================================================

const images = [
    {
        "filename": "2022_Cedric_Kouamé_Gifted_Mold_Archive_GIDA_Journal_Vol1.jpg",
        "caption": "Editor-in-Chief, GIDA Journal Vol I, 2022"
    },
    {
        "filename": "2021_Asian_Underground_MOYC_combined.png",
        "caption": "Archival Researcher, Museum of Youth Culture, 2021"
    },
    {
        "filename": "2022_Sutigi_À_Nous_La_Nuit_Fatoumata_Diabate_GIDA_Journal_Vol1.jpg",
        "caption": "Editor-in-Chief, GIDA Journal Vol I, 2022"
    },
    {
        "filename": "2024_Terrence_Musekiwa_Christian_Cassel_GIDA_Journal_Vol3.png",
        "caption": "Editor-in-Chief, GIDA Journal Vol. III, 2024"
    },
    {
        "filename": "2024_Sara_Benabdallah_143_African_Art_Fair_Marrakech_combined.jpeg",
        "caption": "Creative Director, Sara Benabdallah for 1-54 African Art Fair, 2024"
    }
]

let currentIndex = 0;
let imageEls = [];

// < =======================================================
// < Queries
// < =======================================================

/** 
 * Lookup object of elements queried from the DOM
 */
const queries = {

    /** @type {HTMLDivElement} */
    page: document.getElementById('page'),

    /** @type {HTMLDivElement} */
    header: document.getElementById('header'),

    /** @type {HTMLDivElement} */
    content: document.getElementById('content')

}

// < =======================================================
// < Functions
// < =======================================================

/**
 * Build all image elements upfront and append them to the frame,
 * showing only the first one. Instant switching thereafter.
 * @param {HTMLElement} frame - The container element to append images into
 */
function buildGallery(frame) {
    imageEls = images.map(({ filename }, i) => {
        const img = document.createElement('img');
        img.id = i === 0 ? 'image' : `image-${i}`;
        img.src = `static/portfolio/home/` + filename;
        img.style.display = i === 0 ? '' : 'none';
        frame.appendChild(img);
        return img;
    });
}

/**
 * Switch to the given index, updating the visible image and credit text
 * @param {number} index - Index into the images array
 */
function showImage(index) {
    imageEls[currentIndex].style.display = 'none';
    currentIndex = index;
    imageEls[currentIndex].style.display = '';

    const credit = document.getElementById('credit');
    credit.textContent = images[currentIndex].caption;
}

// ~ =======================================================
// ~ Execution
// ~ =======================================================

// ? Run callback when all resources have loaded
window.addEventListener('load', async () => {

    // Test log
    console.log('home.js has loaded');

    // Load header
    alpha.loadHeader();

    // Build gallery
    const frame = document.getElementById('frame');
    buildGallery(frame);

    // Set initial caption
    document.getElementById('credit').textContent = images[0].caption;

    // Click left half = previous, right half = next
    frame.addEventListener('click', (e) => {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const nextIndex = x < width / 2
            ? (currentIndex - 1 + images.length) % images.length
            : (currentIndex + 1) % images.length;
        showImage(nextIndex);
    });

    // Show the page element
    queries.page.style.display = '';

});