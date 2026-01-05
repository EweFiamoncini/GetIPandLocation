const express = require('express'); 
const fs = require('fs');           
const app = express();              
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/track', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const { lat, lon } = req.body;
    const ipv4 = ip.includes(':') ? ip.split(':').pop() : ip;

    const log = `Data: ${new Date().toLocaleString()} | IP: ${ipv4} | ${lat} , ${lon}\n`;
    fs.appendFileSync('acessos.txt', log);

    console.log(`IP capturado: ${ipv4} em ${lat}, ${lon}`);
    res.json({ status: "ok", seuIP: ipv4 });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));