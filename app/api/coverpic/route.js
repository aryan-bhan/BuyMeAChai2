import connectDB from "@/db/connectDb";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { getPinata } from "@/lib/pinata";
const pinata = await getPinata();

export const POST = async(req) =>
{
 try
 {
    await connectDB();
    
    const data = await req.formData();
    const file = data.get("file");
    const uname = data.get("username");
    const updata = new FormData();
    updata.append("file", file);
    updata.append("network", "public")
    // let u = User.findOne({username : uname});
    // console.log(file)
    const request = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${pinata.config.pinataJWTKey}`,
        },
        body: updata,
      }
    );
    const response = await request.json();
    // console.log(response,"hello")
    await User.updateOne({username : uname}, { $set : {coverpic : response.IpfsHash}})
    // const uploadData = await pinata.upload.file(file)
    // console.log(uploadData);
    let imgurl = pinata.config.pinataGateway+"/ipfs/" + response.IpfsHash;
    return NextResponse.json({"imgurl": imgurl},{status : 200});
    // return NextResponse.json("",{status : 200});
 }
 catch(e)
 {
    console.log(e);
    return NextResponse.json({"error" : "Internal Sever Error"},{status : 500})
 }
}

export const GET = async(req) =>
{
    try{
        await connectDB();
        const uname = req.url.split("username=")[1];
        let u = await User.findOne({username : uname});
        let url = pinata.config.pinataGateway+"/ipfs/" + u.coverpic;
        // console.log(url);
        return NextResponse.json({imgurl : url},{status : 200});
    }
    catch(e)
    {
        return NextResponse.json({"error":"Server Error"},{status : 500});
    }
}