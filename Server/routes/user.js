const express = require("express");
const Router = express.Router;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const{ userModel } = require("../db");
const { JWT_SECRET } = require("../config");
const { userMiddleware } = require("../middleware/userAuth");

const userRouter = Router();

userRouter.post("/signup", async (req, res)=> {
    const { username, password, firstName, lastName } = req.body;

    let errorthrown = false
    try{
        const hashedpass = await bcrypt.hash(password, 5)

        await userModel.create({
            username : username,
            password: hashedpass,
            firstName: firstName,
            lastName: lastName
        })
    } catch(err){
        res.status(403).json({
            message: "user already exists"
        })
        errorthrown = true
    }
    if(!errorthrown){
        res.json({
            message: "your account has been created"
        })
    }
})


userRouter.post("/signin", async (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const user = await userModel.findOne({
        username: username
    })
    if(!user){
        res.status(403).json({
            message: "user doesn't exist"
        })
        return
    }
    const matchpass = await bcrypt.compare(password, user.password)
    if(matchpass){
        const token = jwt.sign({
            id : user._id.toString()
        }, JWT_SECRET)
        res.json({
            message : "you are signed in",
            token : token
        })
    }
    else{
        res.status(403).json({
            message: "invalid creds"
        })
    }

})

module.exports = {
    userRouter : userRouter,// or simply the userRouter
}

// userRouter.get("/purchases", userMiddleware, async (req, res) => {
//     const userId = req.userId
//     const purchased = await purchaseModel.find({
//         userId
//     })
//     /*
//     let purchasedCourseIds = [];

//     for (let i = 0; i<purchases.length;i++){ 
//         purchasedCourseIds.push(purchases[i].courseId)
//     }

//     const coursesData = await courseModel.find({
//         _id: { $in: purchasedCourseIds }
//     })
//     */ 
//     const coursesData = await courseModel.find({
//         _id: { $in: purchased.map(x => x.courseId) }
//     })

//     res.json({
//         purchased,
//         coursesData
//     })

// })

