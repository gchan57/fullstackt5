
const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"}); //Json instead of text/plain
    if(req.url==="/"){
        res.end("Welcome to server1!");
    }
    else if(req.url==="/about"){
        res.end("Welcome to server2");
    }
    else{
        res.statusCode=404;
        res.end("page not Found")
    }
});
  

server.listen(3000,()=>{
    console.log("Server is running..........")
})