// import express from 'express';
// import router from './router.js';
// import dotenv from 'dotenv';
// dotenv.config()
// const app=express();
// app.use("/api",router);
// app.listen(process.env.PORT,()=>{
//     console.log("server started");
// })

import express from 'express';
import router from './router.js'
import cors from 'cors';
import dotenv from 'dotenv';
import connection  from './conn.js';
dotenv.config();
const app=express();
app.use(cors())
app.use(express.json())
app.use("/api",router);
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    });
   
})
.catch((error)=>{
    console.log(error);
})


