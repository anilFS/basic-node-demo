const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") res.write(`<p>Welcome to our home page</p><br>`);
  if (req.url === "/about") {
    res.write(`<h1>About this site</h1>`);
  }

  res.end(`<a href='https://www.google.com'>Its done<a>`);
});

server.listen(5000);
