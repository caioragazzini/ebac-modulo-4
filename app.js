const express = require('express');

const routerPrincipal =require('./routes/principal') ;

const app = express();
const porta =3000;

app.use('/', routerPrincipal);

app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});