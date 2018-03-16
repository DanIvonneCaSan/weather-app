// $(document).ready(function (){
//   dataRequest(urlWeather);
// });


// Key
// https://api.darksky.net/forecast/ce029510af9d1b72b86eec7a93a34852/37.8267,-122.4233
// Latitud 23.634501
// Longitud -102.5527839
// Clave:
// 912d51312c3ecaffee2ec66e4ba5a5cb
//
// Secreto:
// 0256c056777d7f8a

let urlWeatherAPI = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
// [latitude],[longitude]
let keyAPI = "ce029510af9d1b72b86eec7a93a34852";
let btnSbmit = $('#btn-sub')
let latitudeInput = $('#search-latitude');
let altitudeInput = $ ('#search-altitude');
let mapsInput = $('#city-search');
let urlWeather = ``;
let latitudeGeo = '' ;
let altitudeGeo = '';
let urlWGeo = ``;
let divDataInfo = document.getElementById('dataInfo');
let divDailyInfo = document.getElementById('dailyData');

btnSbmit.click((event)=>{
  event.preventDefault();
  let latitudeValue = latitudeInput.val();
  let altitudeValue = altitudeInput.val();

  urlWeather = `${urlWeatherAPI}${keyAPI}/${latitudeValue},${altitudeValue}`;
  dataRequest(urlWeather);

  // Función de geolocalización del lugar actual
  // navigator.geolocation.getCurrentPosition(success, error);
  //
  // function success(position){
  //   latitudeGeo = position.coords.latitude;
  //   altitudeGeo = position.coords.longitude;
  //   urlWGeo = `${latitudeGeo},${altitudeGeo}`;
  //   return urlWGeo;
  // };
  // function error(){
  //   console.log(error);
  // }
  // urlWeather = `${urlWeatherAPI}${keyAPI}/${urlWGeo}`;
});

const dataRequest = (url) => {
  $.ajax({
    type: "GET",
    url : url,
    dataType: 'json'
  }).done(function (data){
    console.log(data);
    paintData (data);
  });

};

const paintData = data => {
  let templateInfo = ``;
  let dataCurrentW = data.currently;
  console.log(dataCurrentW);
  let tempF = dataCurrentW.apparentTemperature;
  let humidity = dataCurrentW.humidity;
  let precipIntensity = dataCurrentW.precipIntensity;
  let pressure = dataCurrentW.pressure;
  let windSpeed = dataCurrentW.windSpeed;
  let uvInd = dataCurrentW.uvIndex;
   console.log(tempF);
  let dailyInfo = data.daily;
  console.log(typeof(dailyInfo));
  console.log(dailyInfo);

  templateInfo +=
      ` <div class=" card col-6 col-sm-6 col-md-6 col-lg-6 offset-4 offset-sm-4 offset-md-4 offset-lg-4">
          <div class="card-body">
          <h1 id="temperature">${tempF}</h1>
          </div>
          <div class="row columns">
            <span>
              <p>Wind: </p>
              <p>Humidity:  </p>
              <p>UV Index:  </p>
              <p>Pressure: </p>
            </span>
            <span>
              <p id="value-wind">${windSpeed}</p>
              <p id="value-humidity">${humidity}</p>
              <p id="value-uv">${uvInd}</p>
              <p id="value-pressure">${pressure}</p>
            </span>
          </div>
                <div class="row predcont">
                  <a href="#" id="prediction">Predicción de la semana</a>
                </div>
              </div>
            </div>`

    //Imprime plantilla en HTML
    divDataInfo.innerHTML = templateInfo;


    $('#prediction').click(function (){
      console.log(data);
      console.log(dailyInfo);
      let templateDiary = ``;
      data.daily.data.forEach(day => {
      console.log(day);
      templateDiary +=
      ` <div class="card col-8 offset-1">
          <div class="card-body text-center">
            <h3  class="card-title m-1">${unixDateToCurrentDate(day.time)}</h3>
              <p>Temperature-high: ${day.temperatureHigh} </p>
              <p>Temperature-min: ${day.temperatureMin} </p>
              <p>Humidity: ${day.humidity}</p>
              <p>UV index: ${day.uvIndex}</p>
              <p>Wind: ${day.windSpeed}</p>
              <p>Pressure: ${day.pressure}</p>
          </div>
        </div>`
    });
    divDataInfo.innerHTML = templateDiary;
  });
};

const unixDateToCurrentDate = (unixNumber) => new Date(unixNumber * 1000).toLocaleString('en-us', {
    weekday: 'long'
});


var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=9e3bc1f1f9a8c60205c0add263c5c8a5&per_page=10&format=json&nojsoncallback=1";

$.ajax ({
    url: flickerAPI,

}).done(function( data ) {
    console.log(data);
    var photo = data.photos.photo[0].id;
    console.log(photo);
    handleResponsePhoto(photo);
}).fail(handleFailurePhoto)

function handleResponsePhoto(photo) {
    console.log('exito');
    console.log(photo);

}

function handleFailure() {
    console.log('error');
};

function handleFailurePhoto() {
    console.log('error');
};
