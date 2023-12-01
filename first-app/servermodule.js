const http = require('http');

const PORT = 4000;
const server = http.createServer((req, res) => {
 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, I am Avnish!');
  console.log('My name is logged on the server.');
});



server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
