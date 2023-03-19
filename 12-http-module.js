const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("This is our short history");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for...</p>
  <a href='/'>back home</a>`);
});
server.listen(3000);
//if sending 2 responses with the same request, you will get error
//because if there is no return js will keep reading the code
//fixing: add return in each if statement or use if else statement
