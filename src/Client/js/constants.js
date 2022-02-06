//for the GET/POST route call to use as the URL attribute
const localServer = 'http://localhost:7550/';
//the last part with API key 
const apiKeyNumber = '175c228ba1b034eb1471d0c1f8094853';
//the base part of the url for get city info with zip code 
const baseUrl = 'http://api.openweathermap.org/geo/1.0/zip?zip='
//NOTE: allows for dynamic changes in large scale situtations like with variables
const apiKey = `&appid=${apiKeyNumber}&units=imperial`
//more weather api using the latr/ lon data gathered 
const baseUrlWeather='https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={APIkey}';


export { localServer };
export { apiKey };
export { baseUrlWeather };
export { baseUrl };