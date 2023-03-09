const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const employeeRouter=require('./routes/employee');
const cors=require('cors');


dotenv.config();

  try {
      mongoose.set('strictQuery', false)
      mongoose.connect(process.env.MONGO_URL) 
      console.log('Mongo connected')
  } catch(error) {
      console.log(error)
      process.exit()
  }




//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

app.use("/api/employee",employeeRouter);


// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });

// app.get("/users", (req, res) => {
//   res.send("Welcome to user page");
// });



app.listen(8800, () => {
  console.log("Backend server is running");
});
