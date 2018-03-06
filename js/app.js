// $(document).ready(function (){
//   dataRequest(urlWeather);
// });


// Key ce029510af9d1b72b86eec7a93a34852
// https://api.darksky.net/forecast/ce029510af9d1b72b86eec7a93a34852/37.8267,-122.4233

// Clave:
// 912d51312c3ecaffee2ec66e4ba5a5cb
//
// Secreto:
// 0256c056777d7f8a

let urlWeather = 'https://api.darksky.net/forecast/ce029510af9d1b72b86eec7a93a34852/';
// [latitude],[longitude]
let form = $('#form-group')
let latitudeInput = $('#search-latitude');
let altitudeInput = $ ('#search-altitude');
console.log(latitudeInput);
console.log(altitudeInput);

form.submit((event)=>{
  event.preventDefault();
  let latitudeValue = latitudeInput.value;
  let altitudeValue = altitudeInput.value;
  console.log("aqui");
  console.log(latitudeValue);
  console.log(altitudeValue);
});

function dataRequest (url) {
  fetch(`${url}`).then(response => {
    response.json(). then( dataPokedex => {
      console.log(dataPokedex);
      dataPokemon (dataPokedex);
    });
  });
};

function dataPokemon(data) {
    for (let i = 0; i < data.pokemon_entries.length; i++) {
         let name = data.pokemon_entries[i].pokemon_species.name;
         let url = data.pokemon_entries[i].pokemon_species.url;
         let urlPokemonForm = `https://pokeapi.co/api/v2/pokemon-form/${name}`;
        // drawPokemon(name, url)
        console.log(name);
        console.log(url);
        fetch(url).then((response)=>{
          response.json().then(dataUrl =>{
            funcionModal(dataUrl);
            console.log(dataUrl);
          });
        });
        fetch(urlPokemonForm).then((response)=>{
          response.json().then(dataUrl1 =>{
            funcionModal(dataUrl1);
            console.log(dataUrl1);
          });
        });
     }
}; //Fin función dataPokemon
//
// function drawPokemon (name, url){
//     // let pokemonHTML = `<div><a href = "${url}"> ${name}`
//     // $("#pokemon-container").append
// }
//
// function funcionModal (dataUrl){
//     console.log(dataUrl);
//
//
// }
