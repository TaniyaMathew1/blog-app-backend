const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoute=require("./controller/userRouter")
const postRoute=require("./controller/postRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.zld0daa.mongodb.net/blogappDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/userblog",userRoute)
app.use("/api/post",postRoute)

app.listen(3006,()=>{
    console.log("server running")
})