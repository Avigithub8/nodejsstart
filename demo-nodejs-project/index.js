const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    const messages = readMessages();
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('<div>');
    messages.forEach((message) => {
      res.write(`<p>${message}</p>`);
    });
    res.write('</div>');
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]
      
    fs.appendFileSync('message.txt', `${message}\n`);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    });
}
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

function readMessages() {
   
      const content = fs.readFileSync('message.txt', 'utf-8');
      return content.split('\n').filter((msg) => msg.trim() !== '');
 
  }

server.listen(3000);