const express = require('express');
const { dirname } = require('path');

const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
});


app.get('/add', (req, res)=>{
    res.sendFile(path.join(__dirname +'/public/add.html'));
});

app.get('/data.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/src/data.js'));
});

app.get('/buscar.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/src/buscar.js'));
});

app.get('/emp.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/src/emp.js'));
});

app.get('/lista', (req, res)=>{
    res.sendFile(path.join(__dirname +'/public/lista.html'));
});
app.get('/subir.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/src/subir.js'));

})

app.listen(5500, ()=>{
    console.log('working', 5500)
});