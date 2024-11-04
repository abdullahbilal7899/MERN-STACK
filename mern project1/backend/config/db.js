const mongoose = require("mongoose");

const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mern_admin");
        console.log("Connection Successfully made");
    } catch (error) {
        console.error("Connection Failed");
        process.exit(0); //zruri ni
    }

};

module.exports = connectDb;