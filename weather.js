const weather = document.querySelector("#weather");

async function showWeather() {
    // These coordinates are for East Lansing, Michigan.
    const url = "https://api.open-meteo.com/v1/forecast"
        + "?latitude=42.731&longitude=-84.482"
        + "&current=temperature_2m&temperature_unit=fahrenheit";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const data = await response.json();
        const temperature = data.current.temperature_2m;

        weather.textContent = `${temperature}°F`;
    } catch (error) {
        weather.textContent = "Weather is unavailable. Try refreshing the page.";
    }
}

showWeather();