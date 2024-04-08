async function getWeather() {
    const cityInput = document.getElementById('city').value;
    const apiKey = 'e43b77b1ec05ce0b50af99599aa6295f'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

