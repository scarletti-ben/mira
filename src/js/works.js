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
    "0": "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_01.png",
    "1": "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_02.png",
    "2": "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_03.png",
    "3": "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_04.jpg",
    "4": "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_05.png"
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


function createItem(data) {
    const markup = `

        <div class="item">

            <div class="item-header">
                <div class="left">${data.h1}</div>
                <div class="middle">${data.h2}</div>
                <div class="right">${data.h3}</div>
            </div>

            <img src="${data.path}" alt="${data.alt}" />

            <div class="item-footer">
                <pre class="footer-left">${data.left}</pre>
                <div class="footer-right">${data.right}</div>
            </div>
        </div>

    `;
    const temp = document.createElement('div');
    temp.innerHTML = markup;
    return temp.firstElementChild;
}

// AMERICA
function renderAmerica(parent) {

    parent.innerHTML = '';

    /** 
     * Array of image paths
     */
    const paths = [
        "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_01.png",
        "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_02.png",
        "static/portfolio/projects/Americas_Cup_2025/2025_Beken_of_Cowes_Isle_of_Wight_Americas_Cup_Book_2.jpg",
        "static/portfolio/projects/Americas_Cup_2025/2025_Beken_of_Cowes_Isle_of_Wight_Americas_Cup_Book_4.jpg",
        "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_03.png",
        "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_04.jpg",
        "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_05.png",
        "static/portfolio/projects/Americas_Cup_2025/2025_Taschen_06.png"
    ]

    // Test image
    const leftText = `
America's Cup
May 2025
Edition of 825
33 x 43 cm, 7.65 kg 
564 pages

Hardcover bound in cotton sailcloth, custom-made Louis Vuitton closure
`.trim();

    const rightText = `Bringing together sports history and design, this publication forefronts rare archival material, unseen photographs, technical data, and expert commentary. The Collector's Edition, made in collaboration with Louis Vuitton, features a bespoke case designed by Marc Newson, crafted from cotton sailcloth and finished with a custom LV closure.`;

    paths.forEach((path, index) => {
        const item = createItem({
            path,
            h1: `Image Research`,
            h2: `Taschen`,
            h3: `2025`,
            left: index === 0 ? leftText : '',
            right: index === 0 ? rightText : ''
        });
        parent.appendChild(item);
    })

}

// GIDA
function renderGida(parent) {
    parent.innerHTML = '';
    const paths = [
        "static/portfolio/projects/GIDA_Journal/[1] 2022_CedricKouame_GiftedMoldArchive_Commission_GIDAJournalVolI.jpg",
        "static/portfolio/projects/GIDA_Journal/[2] Sutigi_GIDA.png",
        "static/portfolio/projects/GIDA_Journal/[3] Osun Osogbo .jpg",
        "static/portfolio/projects/GIDA_Journal/[4] BAMAKO _ GIDa.jpg",
        "static/portfolio/projects/GIDA_Journal/[5] 2022_Nana_ThisTroTroLife_Commission_GIDAJournalVolI.jpg",
        "static/portfolio/projects/GIDA_Journal/[6] GIDAJournal_ikinyugunyugu_art_residency-27 (1).jpg",
        "static/portfolio/projects/GIDA_Journal/[7] anarchist 2 _ GIDA.png",
        "static/portfolio/projects/GIDA_Journal/[8] 2024_ThembinkoiHlatshwayo_JabulaniDhlamini_Interview_GIDAJournalVolIII.jpg",
        "static/portfolio/projects/GIDA_Journal/[9] IMAGE 3 Kitengela Glass-3.png",
        "static/portfolio/projects/GIDA_Journal/[10] TERRENCE_MUSEKIWA_GIDA_JOURNAL_19_03_24_09.png",
        "static/portfolio/projects/GIDA_Journal/[11] 2024_HelioBrunoBuite_HenriqueJParis_ArtDirection_GIDAJournalVolIII.png"
    ]
    const leftText = `
GIDA Journal Vol. I-III
2022-2024
3 Editions
270 x 195 mm
200 pages
`.trim();
    const rightText = `
Pioneering arts and culture publication committed to archiving multidisciplinary creative expression across contemporary Africa. Each volume functioned as a living repository, bringing together visual storytelling, critical thought, and artist led-research to explore themes ranging from architecture and sustainability to visual culture and contemporary art.

As co-Editor-in-Chief across three volumes, notable commissions included Gifted Mold Archive by Cédric Kouamé, bringing to light a rare collection of photographs depicting daily life in 1970-80s Côte d’Ivoire and Sutigi by Fatoumata Diabate, a reprint of her seminal work capturing youth and nightlife across African cities from Bamako to Brazzaville. Other stories included This Trotro Life by artist-researcher Nana Osei Kwadwo, a visual and iconographic study of Ghana’s transport culture, and Kitengela Glass Cottages, exploring sustainable design on the continent. Additional editorial work included conversations with South African photographers Jabulani Dhlamini and Thembinkosi Hlatshwayo, as well as an exploration of the built environment of South South-East Nigeria by Immaculata Abba, and more.

Credits [1] Gifted Mold Archive by Cedric Kouame [2] Sutigi by Fatoumata Diabate [3] Osun Osogbo by Adedolapo Boluwatife [4] Bamako by Nybe Ponzio [5] This Trotro Life by Nana Osei Kwadwo [6] Ikinyugunyugu by Cedric Mizerno [7] Anarchist Citizens by Amal Alhaag, Nadine Stijns and Mustafa Saeed [8] In conversation with Jabulani Dhlamini and Thembinkosi Hlatshwayo [9] Kitengela Glass Cottages by Maganga Mwagogo [10] Terrence Musekiwa by Christian Cassiel [11] Immersing Monuments & Fictions in Luanda by Helio Bruno Buite and Henrique J Paris
`.trim();
    paths.forEach((path, index) => {
        const item = createItem({
            path,
            h1: `Editor-in-Chief`,
            h2: `GIDA`,
            h3: `2022-24`,
            left: index === 0 ? leftText : '',
            right: index === 0 ? rightText : ''
        });
        parent.appendChild(item);
    })

}

// ASIA
function renderAsia(parent) {
    parent.innerHTML = '';
    const paths = [
        "static/portfolio/projects/Asian_Underground/[1] Copy of DJRitu_AsianEquation_LVC_Front_Flyer_1.jpeg",
        "static/portfolio/projects/Asian_Underground/[2] Copy of Earthtribe_Sitarfunk_TheEnd_Front_Flyer_1.jpeg",
        "static/portfolio/projects/Asian_Underground/[3] Copy of BombayJungle_WAGClub_Flyer_1.jpeg",
        // "static/portfolio/projects/Asian_Underground/[4] Copy of Outcaste_Back_Flyer_1.jpeg",
        // "static/portfolio/projects/Asian_Underground/[4] Copy of Outcaste_Front_Flyer_1.jpeg",
        "static/portfolio/projects/Asian_Underground/[4] Copy of Outcaste_Flyer_combined.jpeg",
        "static/portfolio/projects/Asian_Underground/[5] Untitled design.png",
        "static/portfolio/projects/Asian_Underground/[6] 8CDC8B26-8C1F-4914-95B8-7F4FE4CE18D5 (1).jpg",
        "static/portfolio/projects/Asian_Underground/[7] Bhangra girl at Blue Note by Adam Friedman.jpg",
        // "static/portfolio/projects/Asian_Underground/[8] Copy of KalKal_333_Back_Flyer_1.jpeg",
        // "static/portfolio/projects/Asian_Underground/[8] Copy of KalKal_333_Front_Flyer_1.jpeg",
        "static/portfolio/projects/Asian_Underground/[8] Copy of KalKal_333_Flyer_combined.jpeg",
        "static/portfolio/projects/Asian_Underground/[9] Copy of Swaraj_LaunchParty_Back_Flyer_1.jpeg"
    ]
    const leftText = ``;
    const rightText = `
A collection of ephemera and oral histories documenting British Asian dance music culture in the 1990s, from daytimers to the Asian Underground scene, putting particular emphasis on the voices of women. The first of its kind, this archive was collated by commission of the Museum of Youth Culture and has since been used as source material in academic research, contributing to scholarship on music, identity, and British Asian cultural history. 
`.trim();
    paths.forEach((path, index) => {
        const item = createItem({
            path,
            h1: `Archival Researcher`,
            h2: `Museum of Youth Culture`,
            h3: `2021`,
            left: index === 0 ? leftText : '',
            right: index === 0 ? rightText : ''
        });
        parent.appendChild(item);
    })
}

// ~ =======================================================
// ~ Execution
// ~ =======================================================

// ? Run callback when all resources have loaded
window.addEventListener('load', async () => {

    // Test log
    console.log('works.js has loaded');

    const right = document.getElementById('right');

    document.getElementById('project-america').addEventListener('click', () => {
        tools.scrollToTop(right);
        renderAmerica(right);
    });

    document.getElementById('project-gida').addEventListener('click', () => {
        tools.scrollToTop(right);
        renderGida(right);
    });

    document.getElementById('project-asia').addEventListener('click', () => {
        tools.scrollToTop(right);
        renderAsia(right);
    });

    renderAmerica(right);

    // Load header
    alpha.loadHeader();

    // Show the page element
    queries.page.style.display = '';

});