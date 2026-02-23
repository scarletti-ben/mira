// < =======================================================
// < Imports
// < =======================================================

import * as tools from "./tools.js";
import * as alpha from "./alpha.js";

// < =======================================================
// < Declarations
// < =======================================================

/** 
 * Lookup object of image paths
 */
const paths = {
    "test": "static/portfolio/home/2022_Cedric_Kouamé_Gifted_Mold_Archive_GIDA_Journal_Vol1.jpg",
    "test2": "static/portfolio/home/2021_Asian_Underground_MOYC_01.png"
}

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
    },
    // -------------------------------

]

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
 * Update the gallery image and credit text
 * @param {string} key - Image key for `paths` lookup
 * @param {string} text - Credit text to display below the image
 */
export function updateGallery(path, text) {

    const image = document.getElementById('image');
    image.src = `static/portfolio/home/` + path;

    const credit = document.getElementById('credit');
    credit.textContent = text;

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

    // Update gallery image
    let currentIndex = 0;
    const maxIndex = images.length;

    const image = images[0];
    updateGallery(image.filename, image.caption);

    document.getElementById('frame').addEventListener('click', (e) => {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        if (x < width / 2) {
            currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
        } else {
            currentIndex = (currentIndex + 1) % maxIndex;
        }
        const image = images[currentIndex];
        updateGallery(image.filename, image.caption);
    });

    // Show the page element
    queries.page.style.display = '';

});