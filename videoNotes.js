//1. start with nmp init --> installing express (npm i express)
//2. set up folders
//  a. src --> app.js that runs the content in public
//  b. public --> place html pages
//      I. js
//      II. css
//      III. img

// in app.js
// require express
// configure with app.use() 
//      -to run files in public directory
//      - files are currenlty in static form - they don't change

// set up handlebars
// deleted all html from public since I am going to load name.hbs with handlesbars
// set up handlebars
// app.set('view engine', 'hbs')
// and create a folder called views to refer content

// use partials to render content to webpage







// app.get('', (req, res) => {
//     res.send('<h1>Check The Weather<h1>')
//     // res.sendFile('index.html', { root: '.' })
// });

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: 'Gonzalo',
//             age: 30
//         },
//         {
//             name: 'Maria',
//             age: 30
//         },
//         {
//             name: 'Alexa',
//             age: 7
//         },
//         {
//             name: 'Alison',
//             age: 2
//         }
//     ]);
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About Weather App</h1>');
// });