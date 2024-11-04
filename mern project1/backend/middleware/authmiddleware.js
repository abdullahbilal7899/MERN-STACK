const jwt = require("jsonwebtoken");
const User = require("../models/user-auth");

const authMiddleware = async (req,res,next)=>{
    const token = req.header("Authorization");
    if(!token)
        {
            res.status(401).json({msg:"unauthorized HTTP , token not provided"});
        } 
        const jwToken = token.replace("Bearer","").trim();
        console.log(jwToken);

try {
    const isVerfied= jwt.verify(jwToken, "thisismysecretkey");
    const userData= await User.findOne({email:isVerfied.email})

    console.log(userData);
    req.user= userData;
    req.token= token;
    req.userId= userData._id;
    
} catch (error) {
    
}
next()

}

module.exports = authMiddleware;