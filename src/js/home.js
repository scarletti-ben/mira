// < =======================================================
// < Imports
// < =======================================================

import * as tools from "./tools.js";

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

    console.log('home.js has loaded');

});