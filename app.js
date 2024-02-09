const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoute=require("./controller/userRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.zld0daa.mongodb.net/blogappDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/userblog",userRoute)

app.listen(3002,()=>{
    console.log("server running")
})