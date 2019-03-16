import express from 'express';
import database from './database/info';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/v1/person/info', (request, response) => {
    response.status(200).send({
      success: 'true',
      message: 'information retrieved successfully',
      info: database
    });
   });

   const NEW_USER = app.post('/api/v1/person/info', (req, res) => {
    const user = {
     id: 2,
     name: "Olesia Test",
     address: "Test",
     phone: 20000
    }
    return res.send(user);
});


const PORT = 5000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
});
