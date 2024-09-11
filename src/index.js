const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes/index');

   app.use(express.static(path.join(__dirname, 'public')));
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
    app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
