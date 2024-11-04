const adminMiddeware = async(req,res,next)=>
    {
        try {
            const role = req.user.isAdmin;
            if(!role){
                return res.status(404).json({msg:"Accerss Denied, user is not amnd aDMIN"});
    
            }
            next();
        } catch (error) {
            console.log(error)
        }
    }
    module.exports = adminMiddeware;