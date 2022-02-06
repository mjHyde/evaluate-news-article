//constants for local server
//empty object to act as endpoint
let projectData = [];
const newData = [];
// projectData = {
//     'name':"morgan",
//     'age':'30'
// }


//express to run sever and routes
const express = require('express');
// const http = require('http');

//create an instance of express on app
const app = express();

//dependencies
const bodyParser = require('body-parser')

//middleware
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


//pointing the code to the project folder (initialize)
// app.use(express.static('website')); 
// for server file to look for asset files in the dist folder
app.use(express.static('dist/'))
app.use(express.json());


//constants for local server
const port = 7550;
//create a local server using Node and Express
const server = app.listen(port, listening);
//listening function
function listening () {
    console.log(`server is running on ${port}`);
}


// app.get('/', (req,res) => {
//     res.send(projectData);
//     // console.log(projectData);
//     //used to get newly created html ins dist folder?
//     // res.sendFile('dist/index.html')
// })

//change home get route to use the index.html in the dist folder
app.get('/', (req, res) => {
    res.sendFile('dist/index.hmtl')
})

app.get('/add', (req,res) => {
    res.send(projectData);
    console.log(projectData);
})

app.post('/add', (req,res) => {
    // console.log('using the /add post');
    let data = req.body;
    projectData.push(data);
    // console.log(req.body);
    res.send("POST received");
})





// NOTE: this might be the get call to test project
app.post('/test', (req,res) => {
    res.send(res.body)
})