const searchButton = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const weatherConditionElement = document.querySelector('.weather-condition');
const temperatureRangeElement = document.querySelector('.temperature-range');
const descriptionElement = document.querySelector('.description-section p');
const weatherIconElement = document.querySelector('.weather-icon');
const hourlyForecastElement = document.querySelector('.hourly-forecast');

// Simulated weather data for different locations
const weatherData = {
    Cupertino: {
        temperature: '10°C',
        condition: 'Clear',
        low: '3°C',
        high: '16°C',
        description: 'Clear conditions will continue for the rest of the day. Wind gusts are up to 11 km/h.',
        hourly: [
            { time: 'Now', temp: '10°C', icon: 'wi-day-sunny' },
            { time: '8PM', temp: '9°C', icon: 'wi-night-clear' },
            { time: '9PM', temp: '8°C', icon: 'wi-night-clear' },
            { time: '10PM', temp: '7°C', icon: 'wi-night-clear' },
            { time: '11PM', temp: '6°C', icon: 'wi-night-clear' },
            { time: '12AM', temp: '5°C', icon: 'wi-night-clear' }
        ]
    },
    'New York': {
        temperature: '5°C',
        condition: 'Cloudy',
        low: '1°C',
        high: '8°C',
        description: 'Overcast skies will persist throughout the day. Light winds expected.',
        hourly: [
            { time: 'Now', temp: '5°C', icon: 'wi-cloudy' },
            { time: '8PM', temp: '4°C', icon: 'wi-cloudy' },
            { time: '9PM', temp: '3°C', icon: 'wi-cloudy' },
            { time: '10PM', temp: '2°C', icon: 'wi-cloudy' },
            { time: '11PM', temp: '1°C', icon: 'wi-cloudy' },
            { time: '12AM', temp: '0°C', icon: 'wi-cloudy' }
        ]
    },
    'Philadelphia': {
        temperature: '12°C',
        condition: 'Rain',
        low: '10°C',
        high: '15°C',
        description: 'Light rain expected for most of the day. Moderate winds with occasional gusts.',
        hourly: [
            { time: 'Now', temp: '12°C', icon: 'wi-rain' },
            { time: '8PM', temp: '11°C', icon: 'wi-rain' },
            { time: '9PM', temp: '10°C', icon: 'wi-rain' },
            { time: '10PM', temp: '9°C', icon: 'wi-rain' },
            { time: '11PM', temp: '8°C', icon: 'wi-rain' },
            { time: '12AM', temp: '7°C', icon: 'wi-rain' }
        ]
    }
};

// Function to update the UI with new weather data
function updateWeatherUI(data) {
    locationElement.textContent = locationInput.value;
    temperatureElement.textContent = data.temperature;
    weatherConditionElement.textContent = data.condition;
    temperatureRangeElement.textContent = `L:${data.low} H:${data.high}`;
    descriptionElement.textContent = data.description;

    // Update weather icon based on condition
    if (data.condition === 'Clear') {
        weatherIconElement.className = 'wi wi-day-sunny weather-icon';
    } else if (data.condition === 'Cloudy') {
        weatherIconElement.className = 'wi wi-cloudy weather-icon';
    } else if (data.condition === 'Rain') {
        weatherIconElement.className = 'wi wi-rain weather-icon';
    }

    // Update the hourly forecast
    hourlyForecastElement.innerHTML = ''; // Clear existing forecast
    data.hourly.forEach(hourData => {
        const hourElement = `
            <div class="hour">
                <p>${hourData.time}</p>
                <i class="wi ${hourData.icon} weather-icon"></i>
                <p>${hourData.temp}</p>
            </div>
        `;
        hourlyForecastElement.innerHTML += hourElement;
    });
}

// Event listener for search button
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (weatherData[location]) {
        updateWeatherUI(weatherData[location]);
    } else {
        alert('Location not found. Please try Cupertino, New York, or Philadelphia.');
    }
});

document.getElementById('more-btn').addEventListener('click', function () {
    const advancedInfo = document.getElementById('advanced-info');
    if (advancedInfo.classList.contains('hidden')) {
        advancedInfo.classList.remove('hidden');
        this.textContent = 'Less'; // Change button text to 'Less'
    } else {
        advancedInfo.classList.add('hidden');
        this.textContent = 'More'; // Change button text to 'More'
    }
});


// Initial weather data (Cupertino)
updateWeatherUI(weatherData['Cupertino']);
