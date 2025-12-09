// const express=require("express");
// const app=express();
// app.get("/",(req,res)=>{
//     res.end("Bello Welcome to minion server");
// })

// app.listen(3000,()=>{
//     console.log("Server created");
// });

const express = require("express");
const app=express();

//Middleware to read json body
app.use(express.json());
 let users=[
    {id:1,name:"Gchan"}
 ];

 app.get("/users",(req,res)=>{
    res.status(200).json(users);
 })

 app.get("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const user = users.find(u=> u.id === userId);
    
    if(!user){
        return res.status(404).json({message:"No user Found"});
    }
    res.status(200).json(user);
 })

 app.post("/users",(req,res)=>{
    const newUser=req.body;
    const user={
        id: users.length+1,
        name: newUser.name
    }
    users.push(user);
    res.status(201).json({
        message:"User Created Successfully",
        user:user,
    });
 })

  app.put("/users/:id",(req,res)=>{
    const userId=parseInt(req.params.id);
    const updatedUser=req.body;
    const userIndex= users.findIndex(u=>u.id===userId);
    if(userIndex===-1){
        return res.status(404).json({message: "User not found buddy"});
    }
    users[userIndex].name=updatedUser.name;
    res.json({
        message:`User ${userId}  is updated Successfully`,
        updatedUser: users[userIndex],
    })
  })
 app.listen(3000,()=>{
    console.log("Created sucessfully");
 })

 app.delete("/users/:id",(req,res)=>{
    const deleteId=parseInt(req.params.id);
    const filteredUsers=users.filter(user=> user.id !== deleteId)
    if(filteredUsers.length=== users.length){
        return res.status(404).json({message: "User not found buddy"});
    }
    users = filteredUsers;
    res.json({message:`User ${deleteId} deleted `});
 })

