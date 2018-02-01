/**
 * Created by zs on 2018/2/1.
 */

const Koa=require('koa');
const app=new Koa();
const fs=require('fs');

app.use(ctx=>{
    console.log('hello');
    "use strict";
    ctx.response.type='html';
    ctx.response.body=fs.createReadStream('./index.html');
})
app.listen(8000);