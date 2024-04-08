async function getWeather() {
    const cityInput = document.getElementById('city').value;
    const apiKey = 'e43b77b1ec05ce0b50af99599aa6295f'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update DOM with weather information
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('temp-div').innerHTML = `${data.main.temp}°C ${temperatureEmoji(data.main.temp)} <br> ${data.weather[0].main} ${weatherEmoji(data.weather[0].main)}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to get emoji for temperature range
function temperatureEmoji(temperature) {
    if (temperature < 10) {
        return '❄️';
    } else if (temperature >= 10 && temperature < 20) {
        return '🌤️';
    } else {
        return '☀️';
    }
}

// Function to get emoji for weather conditions
function weatherEmoji(weather) {
    switch (weather.toLowerCase()) {
        case 'clear':
            return '☀️';
        case 'clouds':
            return '☁️';
        case 'rain':
            return '🌧️';
        case 'thunderstorm':
            return '⛈️';
        case 'snow':
            return '❄️';
        default:
            return '';
    }
}
