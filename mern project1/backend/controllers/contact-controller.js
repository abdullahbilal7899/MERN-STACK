const Contact = require("../models/contact-model");






const contact = async(req,res)=>{
    try {
        console.log(req.body);
        const {username,email,message} = req.body;
      
                const contactinserted = await Contact.create({username,email,message});
                res.status(201).json({msg:contactinserted,
        
        
                });
           

       
    } 
    catch (error) {
        res.status(400).send({msg : "page not found"});
    }
};





module.exports = {contact}