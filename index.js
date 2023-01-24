// create express test server for deta.sh

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


// sum numbers
app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is ${sum}`);
    }
);

// multiply numbers
app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const product = a * b;
    res.send(`The product of ${a} and ${b} is ${product}`);
}
);

// divide numbers
app.get('/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const quotient = a / b;
    res.send(`The quotient of ${a} and ${b} is ${quotient}`);
}
);

// subtract numbers
app.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const difference = a - b;
    res.send(`The difference of ${a} and ${b} is ${difference}`);
}
);

module.exports = app;

// Path: deta.json
