const User = require("../models/user-auth");
const bcrypt= require("bcrypt")


const home = async(req,res)=>
    {
        try {
            res.status(200).send("Welcome to mern project using router using controller");
        } catch (error) {
            console.log(error);
        }
        
    };


const register = async(req,res)=>{
    try {
        console.log(req.body);

    


        const verify= "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$";
        const {username,email,password,phone} = req.body;

        if(email.match(verify)){


        }
        else{
            return res.status(400).json({msg:"invalid  email format"});
        }

      
if(phone && phone.length!=11 ){
    res.status(400).json({msg:"Phone must be 11 numbers"});
}

if(username && username.length<3){
    res.status(400).json({msg:"Username must be greater than 3 letters"});
}


        const userExist = await User.findOne({email});
        if(userExist)
            {
                return res.status(400).json({msg:"Email already exist"});
            }

        const saltround=12;
        const hash_pass= await bcrypt.hash(password,saltround)


        const userCreated = await User.create({username,email,password:hash_pass,phone});
        res.status(201).json({msg:userCreated,
        token:await userCreated.generateToken(),
        userId:userCreated._id.toString()

        });
    } 
    catch (error) {
        console.log(error);
    }
};



const login = async(req,res)=>{

try {
    const {email,password}= req.body;

    const userExist= await User.findOne({email});
    if(!userExist){
        return res.status(400).json({msg:"Invalid credentials"});
    }
    const user= await bcrypt.compare(password,userExist.password);
    if(user){

        res.status(200).json({
            msg:"Login succesfully",
            token: await userExist.generateToken(),
            userId:userExist._id.toString()
        })
    }
    else{
        return res.status(400).json({msg:"Invalid credentials"});
    }
} catch (error) {
    res.json({msg:"invalid attempt"})
}

}

const user = async(req,res)=>{
try {

    const userData=req.user;
    console.log(userData);
    res.status(200).json({userData});
    
} catch (error) {
    console.log(error);
    
}
}

module.exports = {home,register,login,user}