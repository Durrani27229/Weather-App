// const submit = document.querySelector("#submit");
const form = document.querySelector(".form");
const city = document.querySelector(".city");
const main = document.querySelector(".main");
const iconUrl = "https:"




const url = `http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`

// const getWeather = async () => {
//     const response = await axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`);
//     const data = await response.json();
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log(data);
        
//     })
// }
// getWeather();


// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
//     .then((response) => {
//         console.log(response.data);
        
//     })
//     .catch((err) => {
//         console.log(err);
        
//     })
// })


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const getWeather = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
        const data = await response.json();
        
        main.innerHTML += `<div class="cart">
        <p class="h2">${data.location.name}</p>
            <p class="grey">${data.location.localtime} , ${data.location.country}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="temp">${data.current.feelslike_c}°C</p>
                <img src="${iconUrl}${data.current.condition.icon}" class="img-fluid" alt="">
            </div>
            <p>${data.current.condition.text}</p>
        </div>`
    ;
        
    }
    getWeather()
})
