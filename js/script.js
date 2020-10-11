
// Fonction appelée lors du click du bouton
function start(city) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function actualiser() {
 var city = document.getElementById("city-input").value ;
start(city);
}



function getThreeDayForecast(city){

  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchThreeForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      const firstday = data.list[1];
      const secondday = data.list[2];
      const thridday = data.list[3];

      // On récupère l'information principal du lendemain
      const main = firstday.weather[0].main;
     const description = firstday.weather[0].description;
     const temp = firstday.temp.day;
    const icon = apiWeather.getHTMLElementFromIcon(firstday.weather[0].icon);


      // On récupère l'information principal
     // const main = data.weather[0].main;
     // const description = data.weather[0].description;
     // const temp = data.main.temp;
     // const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container-tomorrow').innerHTML = icon;
     document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
   
     
    
      console.log(main);
      console.log(description);
      console.log(temp);


    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}