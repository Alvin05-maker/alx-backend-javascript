const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

let output = '';
countStudents('database.csv')
  .then((data) => {
    output = data;
  })
  .catch((error) => {
    console.log(error);
  });

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.end(output);
  }
}).listen(1245);

module.exports = app;
