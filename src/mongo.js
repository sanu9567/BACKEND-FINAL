const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://darksideryukento:z1e2n3@cluster0.heow1w6.mongodb.net/")
.then(()=>{
    console.log('Database connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection