// 169 connect-multiparty
const express = require('express');
const fs = require('fs')
const multipart = require('connect-multiparty');

const app = express();
console.log(__dirname)
app.use(multipart({uploadDir: `${__dirname}/upload`}));
app.get('/', (request, response)=> {
    fs.readFile('./node200_project/express/169-multiparty.html', (err, data)=>{
        response.send(data.toString());
    });
});

app.post('/', (request, response)=> {
    const imgFile = request.files.image;
    const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
    console.log(outputPath);
    console.log(request.body, request.files);
    fs.rename(imgFile.path, outputPath,()=> {
        response.redirect('/');
    });
});

app.listen(3000, ()=> {
    console.log('Server is running port 3000!');
});
