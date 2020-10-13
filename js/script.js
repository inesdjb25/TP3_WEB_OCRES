
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
getThreeDayForecast(city);

}



function getThreeDayForecast(city){

  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchThreeForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      let i 

      const firstday = data.list[1];
      const secondday = data.list[2];
      const thridday = data.list[3];

     for(i=1 ; i<4 ; i++) {
        // On récupère l'information principal du lendemain
      const main = data.list[i].weather[0].main;
      const description = data.list[i].weather[0].description;
      const temp = data.list[i].temp.day;
     const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
 
 
       // On récupère l'information principal
      // const main = data.weather[0].main;
      // const description = data.weather[0].description;
      // const temp = data.main.temp;
      // const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
 
       // Modifier le DOM
       document.getElementById('today-forecast-main-' + i +'').innerHTML = main;
       document.getElementById('today-forecast-more-info-' + i +'').innerHTML = description;
       document.getElementById('icon-weather-container-'+ i +'').innerHTML = icon;
      document.getElementById('today-forecast-temp-'+ i +'').innerHTML = `${temp}°C`;
    
     }
     
    
    

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}