"use strict";
/**
 * Created by 神威如狱 on 2017/11/4.
 */
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/product', function (req, res) {
    res.send("接收到商品查询请求");
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已启动，地址是http://localhost:8000");
});
