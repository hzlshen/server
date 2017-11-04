/**
 * Created by 神威如狱 on 2017/11/4.
 */
import * as http from 'http'

const server = http.createServer((require,response)=>{
    response.end("Hello Node!");
})

server.listen(8000);