const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path:'./backend/config.env'});
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
console.log(port);
app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URI;
console.log(uri)
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// app.get('/view',(req,res)=>{
//   try{
//     Post.find({}).then(data=>{
//       res.json(data)
//     }).catch(error=>{
//       res.json({error})
//     })
//   }catch(error){
//     res.json({error})
//   }
// })

// app.post("/upload",async(req,res)=>{
//   const body=req.body;
//   try{
//     const newImange=await Post.create(body)
//     newImange.save();
//     res.status(201),json({msg:"new image"})
//   }catch(error){
//     res.status(409).json({message:err.message})
//   }
// })


const userRouter = require('./routes/user');
// const teamsRouter = require('./routes/teams');

app.use('/user', userRouter);
// app.use('/teams', teamsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
