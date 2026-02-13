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
export function updateGallery(key, text) {

    const path = paths[key];

    const image = document.getElementById('image');
    image.src = path;

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
    updateGallery('test', "Editor-in-Chief, GIDA Journal Vol I, 2022");

    // Show the page element
    queries.page.style.display = '';

});