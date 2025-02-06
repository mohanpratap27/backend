import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors())
app.get("/jokes",(req, res)=>{
    const jokes=[
        {   
        id:1,
        values:"hello mohan"
        },
        {
            id:1,
            values:"hello world"  
        }
    ]
    res.send(jokes)
})
const port = process.env.PORT || 5000 ;
app.listen(port,()=>{
    console.log(`server start at ${port}`)
});
