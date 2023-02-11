class Weather {
        constructor(city) {
                this.apiKey = `234ac259de7f42a490acac8dfb4cd737`;
                this.city = city;
        }

        async getWeather() {
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
                const responseData = await response.json();
                return responseData;
        }

        changeLocation(city) {
                this.city = city;
        }
}

//Display

function display(data)
{
        document.getElementById('location').innerText=city;
        today_weather.innerText=data.weather[0].main;
        temperature.innerText=data.main.temp +" C ";
        icon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        feels_like.innerText="Feels like: "+ data.main.feels_like;
        humidity.innerText="Humidity: "+ data.main.humidity +"%";
        windspeed.innerText="Wind Speed: "+ data.wind.speed +"km/h";
        maxtemp.innerText="Maximum Temperature: "+ data.main.temp_max +"C"
}

let city='Delhi';
const weather = new Weather(city);
document.addEventListener('DOMContentLoaded',GetWeather);

btn.addEventListener('click',(e)=>{
        city=prompt("Enter City Name");
        if(city!==null){
        chngLocation(city);
        GetWeather();
        }

})


function GetWeather() {
        weather.getWeather()
                .then(results => {
                        console.log(results)
                        console.log(results.name)
                        display(results);
                })
                .catch(err => {
                        console.log(err);
                })
}

function chngLocation(city)
{
        weather.changeLocation(city);
}