const http = require('http');

const hostname = 'localhost';
const port = 8090;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    // process.exit(0);
    // process.kill(process.pid, 'SIGTERM');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});

process.on('SIGINT', () => {
    console.log('good Bye!');
    process.kill(process.pid, 'SIGTERM');
});
