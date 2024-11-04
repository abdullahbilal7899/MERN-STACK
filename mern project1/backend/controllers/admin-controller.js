const User = require("../models/user-auth");
const Contact = require("../models/contact-model");
const getAllUsers =  async (req,res) =>
{
    try{
        const users = await User.find();
        return res.status(200).json({users});

    }
    catch(error){
        console.log(error);
    }
}

const deleteUserbyid = async (req,res) =>{

try {
    
    const id = req.params.id;
    await User.deleteOne({_id:id});
    return res.status(200).json({msg:"User Deleted"});

} catch (error) {
    
}

}

const getAllContact = async (req,res) =>
{
    try{
        const contacts = await Contact.find();
        return res.status(200).json({contacts});

    }
    catch(error){
        console.log(error);
    }
}

module.exports = {getAllUsers , getAllContact, deleteUserbyid};