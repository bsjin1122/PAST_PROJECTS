const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response)=> {
    fs.readFile('./node200_project/155-ejs.ejs', 'utf-8', (err, data) => {
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.end(ejs.render(data, {
        table_name : 'Multiplication table 19 X ?', 
        number : 19
       }));
    });
}).listen(50000, () => {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
});