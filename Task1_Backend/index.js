const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 3030;
const productRoutes = require("./routes/products")


dotenv.config();

//connecting with mongodb
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}) .then( ()=>{
console.log('Connected to MongoDB successfully!');

}).catch((error)=>{
   console.log("Couldn't connect to mongodb",error);
   
});
//express middleware
app.use(express.json());

app.use("/api/products", productRoutes);

//testing end point
// app.get('/', (req,res) => {
//     res.send("Welcome to our Home Page!")
// })



app.listen(port, () =>{
    console.log(`Backend app is listening at http://localhost:${port}`);
    
})