/**
 * Created by zs on 2018/2/5.
 */
const Koa = require('koa');
const Fs = require('fs');
const path=require('path');
const serve=require('koa-static');

const staticAsserts=serve(__dirname);
const App = new Koa();
//App.use(ctx=> {
//    "use strict";
//    ctx.response.type='html';
//    ctx.response.body=Fs.createReadStream('./index.html');
//});

App.use(staticAsserts);


App.listen(3000);
