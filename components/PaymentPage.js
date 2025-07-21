"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate , fetchuser } from '@/actions/useractions'
import { useEffect } from 'react'
import Image from 'next/image'



const PaymentPage = ({username}) => {

    const [paymentform, setPaymentform] = useState({name:"",message:"",amount:""})
    const [currentuser, setCurrentuser] = useState({})
    const [Payments, setPayments] = useState([])
    const [ppurl,setPPurl] = useState(null);
    const [cpurl, setCpurl] = useState(null)

    useEffect(() => {
      getData()
    }, [])
    

    const getData = async(params) =>
    {
       let u = await fetchuser(username)
       setCurrentuser(u);
      console.log(username);
       let ppres = await fetch(`/api/profilepic?username=${username}`,
        {
          method : "GET"
        }
       );
       ppres = await ppres.json();
       setPPurl(ppres.imgurl+"?img-width=500&img-height=500");
       let dbpayments = await fetchpayments(username)
       setPayments(dbpayments);
       let cpres = await fetch(`/api/coverpic?username=${username}`,
            {
                method : "GET"
           }
        );
      cpres = await cpres.json();
      setCpurl(cpres.imgurl+"?img-width=2000&img-height=2000");
    }

    const handlechange = (e)=>
        {
            setPaymentform({...paymentform,[e.target.name]:e.target.value})
        }

    const pay = async (amount) =>{
        console.log(amount);
        let a = await initiate(amount , username, paymentform)
        let orderId = a.id;
        console.log(a.id);
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
    
        var rzp1 = new Razorpay(options);
        rzp1.open();    
    } 

  return (
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    

    <div className=' min-h-screen flex flex-col justify-between' >
      <div className=' w-full  h-[400px] relative '>
        {cpurl ? <Image className='object-cover' fill unoptimized src={cpurl} alt="" /> : <span>Loading...</span> }
      </div>
      <div className='relative'>
       <div  className='absolute bg-white rounded-lg w-[7.5rem] h-[7.5rem] bottom-[50%] right-[46%]'>
        {ppurl ?<Image  className='object-cover rounded-lg' unoptimized fill src= {ppurl} alt="profile_pic" /> : <div className='text-black'>Loading..</div> }
       </div>
      <div className="info flex flex-col justify-center items-center mt-24 gap-[.25rem]">
        <div className='text-xl font-semibold'>{username}</div>
        <div className=''>Creating science videos</div>
        <div className='text-gray-600'>4,668 members | 264 posts | $11,770/creation</div>
      </div>
      </div>
      <div className="payment flex gap-3 justify-center w-[80%] my-10 mx-auto">
        <div className="supporters w-1/2 bg-[#acb6ef] rounded-lg p-10 ">
        <h2 className='text-2xl font-bold my-5'> Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {Payments.length == 0 && <li>No payments yet</li>}
                            {Payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="/man.png" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;
                                    </span>
                                </li> 
                            })}

                        </ul>
        </div>

        <div className="makepayment w-1/2 bg-[#e8d5c2] rounded-lg p-10">
        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className="flex gap-4 flex-col">
              <div>
              <input type="text" onChange={handlechange} name = 'name' value = {paymentform.name} className='w-full p-3 rounded-lg text-black bg-slate-100 'placeholder='Enter Name' />
              </div>
              <input type="text" onChange={handlechange} name = 'message' value = {paymentform.message} className='w-full p-3 rounded-lg text-black bg-slate-100 'placeholder='Enter Message' />
              <div>
              <input type="text" onChange={handlechange} name = 'amount' value = {paymentform.amount} className='w-full p-3 rounded-lg text-black bg-slate-100 'placeholder='Enter Amount' />
              </div>
              <button className='p-3 rounded-lg bg-[#8666cf] hover:bg-[#8067bb]' onClick={()=>{pay(Number.parseInt(paymentform.amount)*100)}}>Pay</button>
              </div>
              <div className='flex gap-2 mt-5'>
                <button className='bg-white p-3 text-black rounded-lg' onClick={()=>{pay(1000)}}>Pay ₹10</button>
                <button className='bg-white p-3  text-black rounded-lg' onClick={()=>{pay(2000)}}>Pay ₹20</button>
                <button className='bg-white p-3 text-black rounded-lg' onClick={()=>{pay(5000)}}>Pay ₹50</button>
              </div>
  
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentPage