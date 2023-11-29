// requerir express
const express = require('express');
// colocarlo dentro de una variable
const app = express();
//requerir path
const path = require('path');
// uso de archivos estaticos
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));



// poner a oir al servidor
/*app.listen(3000, () => {
    console.log('servidor corriendo en: http://localhost:3000/');
});*/
// levantar el servidor
const port = process.env.PORT || 3001;
app.listen(port,() => console.log('servidor corriendo en el puerto $(port)'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})