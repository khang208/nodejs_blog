const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./product');
const loginRouter = require('./login');
const cartRouter = require('./cart');
// const product = require('./product');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/product', productRouter);
    app.use('/account', loginRouter);
    app.use('/cart', cartRouter);
    app.use('/', siteRouter);
}

module.exports = route;
