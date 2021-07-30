const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('Merhaba ikinci projeme hoşgeldin!');
});
app.get('/sayfa2', (req, res) => {
 res.send('2. sayfaya geçtiniz!');
});
app.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
});