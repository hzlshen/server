/**
 * Created by 神威如狱 on 2017/11/4.
 */
import * as express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Express");
});

app.get('/product',(req,res)=>{
    res.send("接收到商品查询请求");
});

const server = app.listen(8000,"localhost",()=>{
    console.log("服务器已启动，地址是http://localhost:8000");
});