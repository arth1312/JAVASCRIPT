document.querySelector("#search-btn").addEventListener('click', () => {
    let weatherData = document.querySelector("#search-input");
    let weatherDetails = document.querySelector('.weather');
    let weatherIconUrl = "";

    weatherDetails.style.transition = "all 1s";
    weatherDetails.innerHTML = "";



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value}&appid=6d20280457e2b8481f826bac37f10299`)
        .then(res => res.json())
        .then(data => {
            console.log(data); 

            if (data.weather[0].main == 'Clouds' ) {
                weatherIconUrl = "image/clouds.png";}
            if (data.weather[0].main == 'Haze' ) {
                weatherIconUrl = "image/drizzle.png";
            } else if (data.weather[0].main == 'Clear') {
                weatherIconUrl = "image/clear.png";
            } else if (data.weather[0].main == 'Smoke') {
                weatherIconUrl = "image/mist.png";
            } else if (data.weather[0].main == 'Rain') {
                weatherIconUrl = "image/rain.png";
            } else if (data.weather[0].main == 'Drizzle') {
                weatherIconUrl = "image/drizzle.png";
            } else if (data.weather[0].main == 'Mist') {
                weatherIconUrl = "image/mist.png";
            } 

            let currentDate = new Date;
            let date = currentDate.toLocaleDateString();
            let time = currentDate.toLocaleTimeString();

            let show = `
        <div class=""card>
            <img src="${weatherIconUrl}" alt="Weather Icon" class="weather_icon">
            <div class="temps">
            <h1 class="temp">${Math.round(data.main.temp)}</h1>
            <p>°C </p>
            </div>
            <h2 class="city">${data.name}</h2>
            <div class="details">
                <div class="col">
                     <img src="images/humidity.png" alt="">
                     <div>
                          <p class="humidity">${data.main.humidity}%</p>
                          <p>Humidity</p>      
                     </div>  
                </div>        
                <div class="col">
                    <img src="images/wind.png" alt="">
                    <div>
                         <p class="wind">${data.wind.speed} km/h</p>
                         <p>Wind speed</p>
                    </div>
               </div>
            </div>
            <div class="date_time">
            <span>${date} </span>
            <span> ${time}</span>
            </div>

        </div> `;

            weatherDetails.innerHTML = show;
        })
    .catch(err => console.log(err));
});