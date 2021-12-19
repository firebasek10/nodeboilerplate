const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const dotenv = require("dotenv");
const userRoute = require('../routes/user')
dotenv.config();
app.use(cors());

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('Db Connection Successful')).catch((err)=>console.log(err))

app.use('/api/user', userRoute);
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });


//   localhost:5000/api/user/getadmin
// getadmin is route parameter