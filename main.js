// importing the artists from the other module
import artists from "./modules/artists.js";

const paintingsContainer = document.getElementById('paintingsContainer');

function generateCheckbox() {
    Object.keys(artists).forEach(artistKey => {
        const artist = artists[artistKey];

        const artistDiv = document.createElement('div');
        artistDiv.id = `${artistKey}_container`;
        artistDiv.className = 'artist_container';
        // artist name
        const artistName = document.createElement('h3');
        artistName.textContent = artist.name;
        artistDiv.appendChild(artistName);

        // add painting names
        artist.paintings.forEach(painting => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="checkbox" name="${artistKey}_painting_${painting.title}" value="${painting.title}">
                ${painting.title}
                <br>
            `;

            artistDiv.appendChild(label);
        });
        
        paintingsContainer.appendChild(artistDiv);
    });
}

function showcasePaintings() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const showcaseContainer = document.getElementById('gallery');

    // Clear previous showcase content
    showcaseContainer.innerHTML = '';

    if (checkboxes.length > 9) {
        alert('Please select 9 or fewer paintings.');
        return;
    }

    checkboxes.forEach(checkbox => {
        const paintingTitle = checkbox.value;
        const artistKey = checkbox.name.split('_')[0];
        const artist = artists[artistKey];
        const selectedPainting = artist.paintings.find(painting => painting.title === paintingTitle);

        if (selectedPainting) {
            // Display selected painting with image in the showcase container
            showcaseContainer.innerHTML += `
                <div class = "selected-painting">
                    <h3>${selectedPainting.title}</h3>
                    <img src="./${selectedPainting.image}" alt="${selectedPainting.title}" style="max-width: 500px; max-height: 500px;">
                    <p>Made by ${artist.name}</p>
                </div>
            `;
        }
    });
}

// showing the checkbox
generateCheckbox();


document.getElementById('showButton').addEventListener('click',showcasePaintings);