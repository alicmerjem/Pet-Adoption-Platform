function handleDrop(event) {
    event.preventDefault();
     const data = event.dataTransfer.getData("text");
    const droppedElement = document.getElementById(data);
    const dropZone = document.getElementById('dropZone');
    dropZone.appendChild(droppedElement);
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        document.getElementById('geolocation').value = 
            `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;

        getWeather(position.coords.latitude, position.coords.longitude);
    });
}
function showModal() {
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
}
function submitForm(e) {
    e.preventDefault();
    showModal();
}

function confirmSubmission() {
const form = document.forms[0];
const formData = new FormData(form);

fetch(form.action, {
method: form.method,
body: formData,
})
.then(response => {
if (response.ok) {
    alert("Form submitted successfully!");
    form.reset(); // Reset the form
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
    modal.hide(); // Close the modal
} else {
    alert("Error submitting the form.");
}
})
.catch(error => {
console.error("Error during submission:", error);
alert("An error occurred. Please try again.");
});
}



function getWeather(latitude, longitude) {
const apiKey = '0792feece7d96dcb18a535dc4091e337'; // Replace with your OpenWeatherMap API key
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

// fetch the weather data
fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            const weather = data.weather[0].description;
            const temperature = data.main.temp;
            const cityName = data.name;

            const weatherInfo = `Weather in ${cityName}: ${weather}, ${temperature}°C`;
            document.getElementById('weatherInfo').textContent = weatherInfo;
        } else {
            document.getElementById('weatherInfo').textContent = "Weather information not available.";
        }
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById('weatherInfo').textContent = "Failed to load weather data.";
    });
}