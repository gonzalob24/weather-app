const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();

// Paths for express configuration
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up View engine with hbs
app.set('view engine', 'hbs');
// Point express to custom directory path
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// customize express with public content folder directory to serve 
app.use(express.static(publicDir))

// routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Gonzalo Betancourt',
        info: 'Search by city or zipcode'
    })
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please enter a valid address'
        })
    }

    geocode(req.query.address, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return res.send({
                error: error
            })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: error
                })
            }

            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    });
})

app.listen(3000, () => {
    console.log('Sever is up on port 3000')
})
