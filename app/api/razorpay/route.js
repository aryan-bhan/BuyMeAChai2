import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) =>
{
    await connectDB();
    let body =  await req.formData();
    body = Object.fromEntries(body);

    let p = Payment.findOne({oid : body.razorpay_order_id})
    if(!p)
    {
        return NextResponse.json({sucess:false,message:"Order Id not found!"});
    }

    // let user = await User.findOne 

    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, process.env.KEY_SECRET);

    if(xx)
    {
        const UpdatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done: "true"}, {new: true})
        console.log(UpdatedPayment);    
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${UpdatedPayment.to_user}?paymentdone=true`);
    }
    else
    return NextResponse.json({sucess : false , message :  "Payment Verification Failed!"});
}