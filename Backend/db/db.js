const { default: mongoose } = require("mongoose")

const connectdb=async(URI)=>{
const res=await mongoose.connect(URI);
return res;
}


module.exports={connectdb}