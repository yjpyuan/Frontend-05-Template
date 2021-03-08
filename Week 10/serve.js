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
#container {
width: 500px;
height: 300px;
display: flex;
background-color: rgb(255,255,255);
}
#container #myid {
width: 200px;
height: 100px;
background-color: rgb(255,0,0);
}
#container .c1 {
flex: 1;
background-color: rgb(0,255,0);
}
</style>
</head>
<body id="root">
<div id="container">
<div id="myid" />
<div class="c1" />
</div>
</body>
</html>`);
  });
}).listen('8080');

console.log('serve is start');