// < =======================================================
// < Imports
// < =======================================================

import * as tools from "./tools.js";
import * as alpha from "./alpha.js";

// < =======================================================
// < Declarations
// < =======================================================



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



// ~ =======================================================
// ~ Execution
// ~ =======================================================

// ? Run callback when all resources have loaded
window.addEventListener('load', async () => {

    // Test log
    console.log('main.js has loaded');

    // Add keyboard listener to the DOM
    document.addEventListener('keydown', (event) => {

        // ~ Hotkey: Control + Alt + D
        // > Action: Toggle outline for all site elements
        if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'd') {
            event.preventDefault();
            document.body.classList.toggle('debugging');
        };

    });

});