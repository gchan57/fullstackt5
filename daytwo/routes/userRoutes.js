const express=require("express");
const router = express.Router(); //router set  up


 let users=[
    {id:1,name:"Gchan"}
 ];

 router.get("/users",(req,res)=>{
    res.status(200).json(users);
 })

 router.get("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const user = users.find(u=> u.id === userId);
    
    if(!user){
        return res.status(404).json({message:"No user Found"});
    }
    res.status(200).json(user);
 })

 router.post("/users",(req,res)=>{
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

  router.put("/users/:id",(req,res)=>{
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


 router.delete("/users/:id",(req,res)=>{
    const deleteId=parseInt(req.params.id);
    const filteredUsers=users.filter(user=> user.id !== deleteId)
    if(filteredUsers.length=== users.length){
        return res.status(404).json({message: "User not found buddy"});
    }
    users = filteredUsers;
    res.json({message:`User ${deleteId} deleted `});
 })

 module.exports =   router;