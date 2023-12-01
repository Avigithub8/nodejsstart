const http = require('http');


const server = http.createServer((req, res) => {
   const url=req.url;
     res.setHeader('Content-Type','text/html');
   if(url==='/'){
    res.write('<html>')
    res.write('<head><title>Node js demo project</title></head>')
    res.write('<body>Welcome to my Node Js project</body>')
    res.write('</html>')
   }else if(url==='/home'){
    res.write('<html>')
    res.write('<head><title>Node js demo project</title></head>')
    res.write('<body>Welcome home</body>')
    res.write('</html>')
   }else if(url==='/about'){
    res.write('<html>')
    res.write('<head><title>Node js demo project</title></head>')
    res.write('<body>Welcome to About Us page</body>')
    res.write('</html>')
   }else if(url==='/node'){
    res.write('<html>')
    res.write('<head><title>Node js demo project</title></head>')
    res.write('<body>Welcome to my Node Js project</body>')
    res.write('</html>')
   }

  
});



server.listen(3000);
