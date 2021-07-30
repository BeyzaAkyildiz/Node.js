const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('Merhaba ikinci projeme hoşgeldin!');
});
app.get('/kategori', (req, res) => {
 //res.send('Kategori sayfasındasınız!');
 res.json({ 'product': 'Elma', 'price': 3.50, 'currency': 'TL' });
});
app.get('/galeri/:categoryUrl/:titleUrl', (req, res) => {
 const category = req.params.categoryUrl;
 const titleUrl = req.params.titleUrl;
 
 res.send(`${category} kategorisindeki ${titleUrl} içeriğine bakıyorsunuz.`);
});
app.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
});