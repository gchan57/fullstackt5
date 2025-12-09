const {add,mul,sub}=require("./app.js")
console.log(add(700,5))
console.log(mul(9,5))
console.log(sub(34,5))
const fs= require("fs");
fs.writeFile("hello.txt","Hello World","UTF-8",(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("created successfully");
})