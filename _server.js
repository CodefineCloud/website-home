const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
// const { index } = require('./config/static.json');
// const { apps: [ { env: { PORT } } ] } = require('./config/pm2.json');
const SERVER_PORT = process.env.SERVER_PORT;
const PRODUCT_DEST = process.env.PRODUCT_DEST;

const app = new Koa();
app.use( serve( path.resolve(__dirname, PRODUCT_DEST), { extensions: ['html'] } ));
app.listen(SERVER_PORT);

console.log(`Server is running at ${SERVER_PORT}`);