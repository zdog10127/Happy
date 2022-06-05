import express from 'express';

const app = express();

app.get('/users', (request, response) => {
   return response.json({ message: 'LUUKER GOSTOSO'});
});

app.listen(4000);