const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); 
const { log } = require("util");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res) {

    // const url = "https://api.tomorrow.io/v4/weather/forecast?location=Mumbai&apikey=37gT4NdUkB65NhVmRvSywu2RzjGZQqS8";
    // https.get(url, function(response){

    //     response.on("data", function(data) {
    //         const weatherData = JSON.parse(data);
    //         const temp = weatherData.timelines.minutely[0].values.temperature;
    //         res.write("the temperature is:" + temp);
    //         res.send();

    //     })        
    // })
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    console.log(req.body.cityName);
    console.log("received");
    
})


app.listen(2000, function() {
    "server started";
})

// const express = require("express");
// const https = require("https");

// const app = express();

// app.get("/", (req, res) => {
//     const url = "https://api.tomorrow.io/v4/weather/forecast?location=Mumbai&apikey=37gT4NdUkB65NhVmRvSywu2RzjGZQqS8";
    
//     https.get(url, (response) => {
//         let data = '';

//         response.on("data", (chunk) => {
//             data += chunk; // Accumulate data chunks
//         });

//         response.on("end", () => {
//             try {
//                 const weatherData = JSON.parse(data);
//                 const temp = weatherData.timelines.minutely[0].values.temperature;
//                 res.send("The temperature is: " + temp);
//             } catch (error) {
//                 res.status(500).send("Error processing data");
//             }
//         });
//     }).on("error", (error) => {
//         res.status(500).send("Error making request");
//     });
// });

// app.listen(2000, () => {
//     console.log("Server started on port 2000");
// });
