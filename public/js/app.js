const weatherForm = document.querySelector('form')
const searchLocation = document.querySelector('input')
const message1 = document.getElementById('message-1')
const message2 = document.getElementById('message-2')
const background = document.querySelector('body')
const currentWeather = document.getElementById('weather-img')
const currentTime = new Date()
const weatherList = ['Sunny', 'Clear', 'Drizzle', 'Hail', 'Heavy Rain', 'Light Rain', 'Partly cloudy', 'Snow', 'Storm', 'Mist', 'Shallow Fog', 'Shower In Vicinity']
var weatherClass = 'weather-empty'
const timeOfDay = {
    Morning: '07',
    Afternoon: '12',
    Night: '19'
}
// Changes the background of the body depending on the time of day
const changeBackground = (currentTime) => {
    currentTime = currentTime.getHours()
    console.log(currentTime)
    if (currentTime >= timeOfDay.Morning && currentTime < timeOfDay.Afternoon) {
        background.classList.add('background-GM');
    }
    else if (currentTime >= timeOfDay.Afternoon && currentTime < timeOfDay.Night) {
        background.classList.add('background-GM');
    }
    else {
        background.classList.add('background-GN');
    }
}

changeBackground(currentTime)
message1.textContent = ''
message2.textContent = ''
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchLocation.value
    message1.textContent = 'Loading...'
    message2.textContent = ''
    currentWeather.classList.remove(weatherClass.toLowerCase())

    fetch('/weather?address=' + location).then((response) => {
        // parsed data
        response.json().then((data) => {
            if (data.error) {
                console.log(data)
                message1.textContent = data.error
            } else {
                // message1.textContent = data.location
                message1.innerHTML = data.location
                message2.innerHTML = 'It is currently ' + data.forecast.temp + '<span style="font-size:18px">&#8457</span>' + ' and it feels like ' + data.forecast['feels-like'] + '<span style="font-size:18px">&#8457</span>.<br>' +
                    'There is ' + data.forecast.precip + '% chance of rain.<br>'
                    + 'Today is ' + data.forecast.weather + '.'
                // console.log(data.forecast) // used for debugging
                // console.log(weatherClass.toLowerCase()) // used for debugging
                weatherClass = 'weather-' + weatherList.filter(weather => message2.textContent.includes(weather))
                weatherClass = weatherClass.split(' ').join('-')
                // console.log(weatherClass.toLowerCase()) // used for debugging
                currentWeather.classList.add(weatherClass.toLowerCase())
            }
        })
    })
})