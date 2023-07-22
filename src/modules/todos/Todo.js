const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema(
    {
        name:{
            type:mongoose.SchemaTypes.String,
            required:true
        },
        list:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"List"
        },
        user:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"User"
        },
    },
    {
        versionKey:false,
        timestamps:{
            createdAt:"created_at",
            updatedAt:"updated_at"
        }
    }
)

const Todo=new mongoose.model("Todo",todoSchema)

module.exports=Todo