const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.log('err');
  }).on('data', (chuck) => {
    body.push(chuck.toString());
  }).on('end', () => {
    // body = Buffer.concat(body).toString();
    body = (Buffer.concat([ Buffer.from(body.toString()) ])).toString();
    console.log(body);
    response.writeHead(200, {
      'Content-type': 'text/html'
    });
    response.end(`<html>
<head>
<style>
#root {
  font-size: 13px;
}
body div #myid {
width: 100px;
background-color: #ff5000;
}
body div img {
width: 30px;
background-color: #ff1111;
}
</style>
</head>
<body id="root">
<div>
<img id="myid" />
<img />
</div>
</body>
</html>`);
  });
}).listen('8080');

console.log('serve is start');