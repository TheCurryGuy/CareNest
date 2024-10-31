const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
require("dotenv").config()

const { userRouter } = require("./routes/user")
const { adminRouter } = require("./routes/admin")

const app = express()
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173' // Adjust based on your frontend URL
}));


app.use("/user", userRouter)
app.use("/admin", adminRouter)

async function main(){
    //by doing this it ensures us that if the database connection fails then the server wont start onlyyy
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000, ()=> {
        console.log("Server is running on port 3000")
    })
}

main()