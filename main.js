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
    // get the checkboxes information
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedPaintings = Array.from(checkboxes).map(checkbox => checkbox.value);
    
    // set painting limit
    const maxPaintings = 9;

    const finalSelection = selectedPaintings.splice(0, maxPaintings);

    // test
    console.log('Selected Paintings:', finalSelection);

    
}

generateCheckbox();


document.getElementById('showButton').addEventListener('click',showcasePaintings);