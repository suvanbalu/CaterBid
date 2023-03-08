import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
// import { Caterer } from '../models/Cuser.js';

router.get("/",(req,res)=>{
    res.send("User API");
});
// user signup
router.post("/usignup", async(req, res) => {
    console.log("1",req.body);
    const { firstname,lastname, email, password, phone, username } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10)
        console.log("password",password)
        const user = await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: bcrypt.hashSync(password, salt),
            phone: phone,
            username: username,
        });
        res.status(201).json({ user:user._id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
//  user delete
router.delete("/delete/:id",async(req,res)=>{
    try{
        const user = await User.findOneAndDelete({username:req.params.id});
        if(!user){
            return res.status(404).json({error:"Not Found"});
        }else{
            console.log("User deleted");
            res.status(200).json(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
//  user login
router.post("/ulogin",async (req,res)=>{
    try{
        const {email,password} = req.body;
        const auth = await User.findOne({email: email});
        if (auth){
            if(bcrypt.compareSync(password,auth.password)){
                const token = jwt.sign({id:auth._id},"secret-key");
                res.status(200).json({auth:auth._id,token:token});
            }
            else{
            res.status(500).json({message:"Invalid Password"});
            }
        }
        else{
            res.status(500).json({message:"Invalid Email"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }

})
// user secret route
router.get("/ulogin",async (req,res)=>{
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,"secret-key",(err,decoded)=>{
            if(err){
                res.status(401).json({error:"Invalid Token"});
            }
            else{
                res.status(200).json({message:"Authorized"})
            }
        })
    }
    else{
        res.status(401).json({error:"Token not provided"});
    }   
}
);

// user profile
router.get("profile/:id",async(req,res)=>{
    try{
        const user = await user.findOne({username:req.params.id});
        if(!user){
            return res.status(404).json({error:"Not Found"});
        }else{
            res.status(200).json(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
})
export default router;

