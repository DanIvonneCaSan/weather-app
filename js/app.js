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
      ` <div class="col-6 col-sm-6 col-md-6 col-lg-6 offset-4 offset-sm-4 offset-md-4 offset-lg-4">
          <div class="row">
          <h1 id="temperature">${tempF}</h1>
          </div>
          <div class="row">
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
                <div class="row">
                  <a href="./views/view1.html" id="prediction">Predicción de la semana</a>
                </div>
              </div>
            </div>`

    //Imprime plantilla en HTML
    divDataInfo.innerHTML = templateInfo;


    // $('#prediction').click({
    //   let templateDiary = ``;
    //   // console.log(data);
    //   templateDiary +=
    //   `<div class="row">
    //     <span>
    //       <p>Lunes</p>
    //       <p>Martes</p>
    //       <p>Miércoles</p>
    //       <p>Jueves</p>
    //       <p>Viernes</p>
    //
    //     </span>
    //     <span>
    //       <p id="value1"></p>
    //       <p id="value2"></p>
    //       <p id="value3"></p>
    //       <p id="value4">press</p>
    //       <p id="value5">press</p>
    //       <p id="value6">press</p>
    //       <p id="value7">press</p>
    //
    //     </span>
    // </div>`
    //   divDailyInfo.innerHTML = templateDiary;
    // });

};
