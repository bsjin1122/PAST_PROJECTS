const express = require('express');
const app = express();

app.get('/', (request, response)=> {
    response.send('<h1>Hello express module!</h1>');
});

app.listen(3000, ()=> {
    console.log('Server is running port 3000!');
})