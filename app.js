import express from 'express';
import database from './database/info';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = [];

app.get('/api/v1/person/add', (request, response) => {
    response.status(200).send({
      success: 'true',
      message: 'information retrieved successfully',
      info: database
    });
   });

   
   app.post('/api/v1/person/add', (request, response) => {
    data.push(
      {id:request.body.id,
        name:request.body.name,
        address: request.body.address,
        phone: request.body.phone
      });
              
      response.status(200).send({
            success: 'true',
            message:  JSON.stringify(request.body) + 'user added'
        });
});

const PORT = 5000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
});
