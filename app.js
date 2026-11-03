const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Server', 'MyTestApp/2.0.0');
  res.setHeader('X-Powered-By', 'Express/4.18.2');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Test App v2.0.0</h1><p>For Topscan drift detection testing</p>');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
