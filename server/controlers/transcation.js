import Transaction from "./.././models/Transcation.js";

import { responder } from "./../util.js";
const postApiTranscation =
async(req,res)=>{
    const{amount,type,category,description,}=req.body;

    const transcation = new Transaction({
        amount,
        type,
        category,
        description
    });
    try{
    const savedTransaction = await transcation.save();

     return responder
     ({
        res,
        success:true,
        message:'Transaction saved',
        transcation:savedTransaction
    });
    }
    catch(err){
     return responder({
        res,
        success:false,
        message:err.message
     
    });
    }
    
}
const getApiTranscation = async (req, res) => {
    const findTransaction = await Transaction.find();

    try {
        return responder({
            res,
            success:true,
            message:"Successfully fetched all transactions",
            data:findTransaction 
        });
    }
    catch(e) {
        return responder({
            res,
            success:false,
            message :e.message
        });
    }
}
export {postApiTranscation,getApiTranscation}