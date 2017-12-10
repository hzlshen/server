import * as express from 'express';
import {Server} from "ws";

const app = express();

export class Product{
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ){

    }
}

const products:Product[]=[
    new Product(1,"第一个商品",1.99,2.5,"这是一个商品Helloo word",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",8.49,4.5,"这是二个商品Helloo word",["图书","硬件设备"]),
    new Product(3,"第三个商品",7.09,1.5,"这是三个商品Helloo word",["服装","硬件设备"]),
    new Product(4,"第四个商品",6.39,2.5,"这是四个商品Helloo word",["线下","硬件设备"]),
    new Product(5,"第五个商品",5.49,2.5,"这是五个商品Helloo word",["你好","硬件设备"]),
    new Product(6,"第六个商品",3.69,3.5,"这是六个商品Helloo word",["电子产品","硬件设备"])
];


app.get('/',(req,res)=>{
    res.send("Hello Express");
});


app.get("/api/products",(req,res)=>{
    res.json(products);
});

app.get("/api/product/:id",(req,res)=>{
    res.json(products.find((product)=>product.id ==req.params.id));
});

const server = app.listen(8000,"localhost",()=>{
    console.log("服务器已启动，地址是：http://localhost:8000");
})

const wsServer = new Server({port:8085});
wsServer.on("connection",websocket=>{
    websocket.send("这个消息是服务器主动推送的");
    websocket.on("message",message=>{
        console.log("接收到message"+message);
    })
})

setInterval(()=>{
    if(wsServer.clients){
        wsServer.clients.forEach(client=>{
            client.send("这是定时发送的")
        })
    }
},2000);