const Service = require("../models/service-model");






const service = async(req,res)=>{
    try {
       const showdata= await Service.find();
          if(!showdata){
            return res.status(404).json({msg:"Data not found"});
          } 
          res.status(200).json({msg:showdata})

       
    } 
    catch (error) {
   console.log(error)
    }
};





module.exports = {service}