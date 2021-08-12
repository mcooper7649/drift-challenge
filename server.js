const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const bodyParser = require("body-parser");
// require API_helper.js
const api_helper = require('./API_helper')

app.use(bodyParser.urlencoded({extended: true}));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11


app.get('/get_joke', (req, res) => { //Line 9
  api_helper.make_API_call('https://icanhazdadjoke.com/')
  .then(response => {
      console.log(response.joke)
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
}); //Line 11

app.post("/send_message", function (req, res){
  api_helper.make_API_call('https://driftapi.com/conversations/3241042197/messages')
  .then(response => {
      console.log(response)
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})