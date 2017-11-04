"use strict";
/**
 * Created by 神威如狱 on 2017/11/4.
 */
var http = require('http');
var server = http.createServer(function (require, response) {
    response.end("Hello Node!");
});
server.listen(8000);
