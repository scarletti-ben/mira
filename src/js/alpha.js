// < ======================================================
// < Functions
// < ======================================================

/** 
 * Fetch JSON data from a URL
 * 
 * @param {string} url - The URL with a `.json` response
 * @returns {Promise<any>} Promise of the parsed JSON data
 * @throws For an unsuccessful fetch or invalid JSON
 */
export async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error('Fetch error', { cause: error });
    }
}

/** 
 * 
 */
export function loadHeader() {
    const markup = `

        <div class="header-left">
            <a href="index.html" class="site-title-link">
                <h1 class="site-title">Mira Makadia</h1>
                <p class="site-subtitle">Editor & Researcher</p>
            </a>
        </div>

        <nav class="header-right">
            <a href="works.html">Works</a>
            <a href="about.html">Information</a>
        </nav>

    `;
    document.getElementById('header').innerHTML = markup;
}