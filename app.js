import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/api/v1/person/info', (request,response) => {
  let data = [];
  fs.readdirSync('./users').forEach(file => {
      let fileData = fs.readFileSync('./users/'+ file,'utf8');
      console.log(JSON.parse(fileData));
      data.push(JSON.parse(fileData));
    });
  response.status(200).send({
      success: 'true',
      message: 'information retrieved successfully',
      info: data
  });
});

app.post('/api/v1/person/add', (request, response) => {
  fs.appendFileSync('./users/user' + request.body.name + '.json', JSON.stringify({
    id: Math.random(),
    name: request.body.name,
    address: request.body.address
  }));
  response.status(200).send({
    success: 'true',
    message: request.body.name + ' user was successfully added'
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});