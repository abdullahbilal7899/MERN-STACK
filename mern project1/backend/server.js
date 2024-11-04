const express = require("express");
const Authrouter = require("./routes/auth-routes");
const Contactrouter = require("./routes/contact-route");
const Servicerouter = require("./routes/service-route");
const adminRouter = require('./routes/admin-routes')
const connectDb = require("./config/db");

const cors=require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/auth",Authrouter);
app.use("/form",Contactrouter);
app.use("/card",Servicerouter);
app.use("/admin",adminRouter);

const port = 8000;
connectDb().then(()=>{
    app.listen(port, ()=>{console.log("server started at " + port)});
})
