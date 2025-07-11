import mongoose from "mongoose";
export const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully");
    }
    catch(error){
       console.error("mongodb connection error",error) 
       process.exit(1);
    }
}


//mongodb+srv://abebetigabu90:Wy4b0Mn6GP1FgjAL@cluster0.eutvqti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://abebe:<db_password>@cluster0.waoyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://abebetigabu90:<db_password>@cluster0.eutvqti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0