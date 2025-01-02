//fetch = Function used for making HTTP requests to fetch resources.
//        (JSON style data, images, files)
//        Simplifies asynchronous data fetching in JS and used for interactiong with APIs to retrieve and send data asynchronously over the web.
//        fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response =>{
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json;
//     })
//     .then(data =>{console.log(data);
//                   console.log(`ID = ${data.id}`);
//                   console.log(`Weight = ${data.weight}`);
//     })
//     .catch(error => console.error(error));

// fetchData();

// async function fetchData(){
    
//     try{
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");

//         if(!response.ok){
//             throw new Error("could not fetch resource");
//         }

//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }

// }

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
        alert("An error occurred while fetching the Pokemon data. Please try again.");
    }
}