// importing the artists from the other module
import artists from "./modules/artists.js";

const paintingsContainer = document.getElementById('paintingsContainer');

function generateCheckbox() {
    Object.keys(artists).forEach(artistKey => {
        const artist = artists[artistKey];
        
        // artist name
        paintingsContainer.innerHTML += `<h2>${artist.name}</h2>`;

        // add painting names
        artist.paintings.forEach((painting, index) => {
            paintingsContainer.innerHTML += `
            <label>
                <input type="checkbox" name="${artistKey}_painting${index +1}" value="${painting.title}">
                ${painting.title}
                </label>
                <br>
            `;
        });
    });
}

function showcasePaintings() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const showcaseContainer = document.getElementById('gallery');

    // Clear previous showcase content
    showcaseContainer.innerHTML = '';

    checkboxes.forEach(checkbox => {
        const paintingTitle = checkbox.value;
        const artistKey = checkbox.name.split('_')[0];
        const artist = artists[artistKey];
        const selectedPainting = artist.paintings.find(painting => painting.title === paintingTitle);

        if (selectedPainting) {
            // Display selected painting with image in the showcase container
            showcaseContainer.innerHTML += `
                <div>
                    <h3>${selectedPainting.title}</h3>
                    <img src="./${selectedPainting.image}" alt="${selectedPainting.title}" style="max-width: 400px; max-height: 400px;">
                </div>
            `;
        }
    });
}

generateCheckbox();


document.getElementById('showButton').addEventListener('click',showcasePaintings);