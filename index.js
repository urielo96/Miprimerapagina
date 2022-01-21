const express = require('express'); //Traes express a tu proyecto

const app = express(); //Creas una instacia en express

app.use(express.static('./public'));
app.use(express.static('./public/html'));

app.get('/', (req,res) => {
    res.render("./html/index.html")
})

app.listen(3000, () => console.log ("Servidor en el puerto 3000"))