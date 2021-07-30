const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
 res.write('Merhaba ilk projeme hoşgeldin!');
 res.end();
});
server.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
});
