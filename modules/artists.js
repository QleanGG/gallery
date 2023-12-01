/* 

artist structure 

artist = {
    name: painter;,
    paintings: [
    {
        title:paintingname
        image: /path/to/painting
    },
    {
        name:paintingname;
        paintingPath: /path/to/painting
    },]
}
*/

const artists = {
    artist1: {
        name:"Leonardo da Vinci",
        paintings: [
            {
                "title":"Mona Lisa",
                "image": 'resources\paintings\davinci\Mona_Lisa.jpg',
            },
            {
                "title":"The Last Supper",
                "image": 'resources\paintings\davinci\Last_Supper.jpg',
            },
            {
                "title":"Vitruvian Man",
                "image": 'resources\paintings\davinci\Vitruvian-Man.jpg',
            },
            {
                "title":"Lady with an Ermine",
                "image": 'resources\paintings\davinci\Lady_with_an_Ermine.jpg',
            },
            {
                "title":"Annunciation",
                "image": 'resources\paintings\davinci\Annunciation.jpg',
            },
        ]
    },
    artist2: {
        name:"Vincent van Gogh",
        paintings: [
            {
                "title":"The Starry Night",
                "image": 'resources\paintings\vangogh\Starry_Night.jpg',
            },
            {
                "title":"Wheatfield with Cypresses",
                "image":"resources\paintings\vangogh\Wheatfield.jpeg",
            },
            {
                "title":"Café Terrace at Night",
                "image": 'resources\paintings\vangogh\Cafe_Terrace.jpeg',
            },
            {
                "title":"Starry Night Over the Rhône",
                "image": 'resources\paintings\vangogh\Starry_Night_Over_the_Rhone.jpg',
            },
            {
                "title":"The Night Cafe",
                "image": 'resources\paintings\vangogh\night_cafe.jpg',
            },
        ]
    },
    artist3: {
        name:"Pablo Picasso",
        paintings: [
            {
                "title":"Guernica",
                "image": 'resources\paintings\picasso\guernica.webp',
            },
            {
                "title":"Blue Nude",
                "image":"resources\paintings\picasso\Blue_Nude.jpg",
            },
            {
                "title":"The Weeping Woman",
                "image": 'resources\paintings\picasso\weeping.jpg',
            },
            {
                "title":"The Girl with a Mandolin",
                "image": 'resources\paintings\picasso\mandolin.jpg',
            },
            {
                "title":"The Old Guitarist",
                "image": 'resources\paintings\picasso\Old_guitarist.jpg',
            },
        ]
    },
    artist4: {
        name:"Claude Monet",
        paintings: [
            {
                "title":"Japanese Bridge",
                "image": 'resources\paintings\Claude\japanese_bridge.jpg',
            },
            {
                "title":"The Artist's Garden at Giverny",
                "image":'resources\paintings\Claude\Garten_in_Giverny.jpg',
            },
            {
                "title":"The Cliff Walk at Pourville",
                "image": 'resources\paintings\Claude\cliff-walk-at-pourville.jpg',
            },
            {
                "title":"Nympheas Reflections of Clouds on the Water-Lily Pond",
                "image": 'resources\paintings\Claude\Reflections_of_Clouds_on_the_Water-Lily_Pond.jpg',
            },
            {
                "title":"Woman with a Parasol - Madame Monet and Her Son",
                "image": 'resources\paintings\Claude\madame_monet_and_her_son.jpg',
            },
        ]
    },
    artist5: {
        name:"Menashe Kadishman",
        paintings: [
            {
                "title":"The Binding of Isaac",
                "image": 'resources\paintings\kadishman\binding-of-isaac.jpg',
            },
            {
                "title":"Sheep",
                "image":'resources\paintings\kadishman\sheep.jpg',
            },
            {
                "title":"Barren Landscape with a Flock of Sheep",
                "image": 'resources\paintings\kadishman\Rooster.webp',
            },
            {
                "title":"Herzl's Vision",
                "image": "resources\paintings\kadishman\Herzl's Vision.webp",
            },
            {
                "title":"Red Cracked Earth",
                "image": 'resources\paintings\kadishman\Red-Cracked-Earth.jpg',
            },
        ]
    },
};

export default artists; 