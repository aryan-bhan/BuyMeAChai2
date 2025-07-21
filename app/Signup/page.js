'use client'
import {React,useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import Link from 'next/link';
const Signup = () => {
    
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [eyeopen, setEyeopen] = useState(false);
    const [samepass,setSamepass] = useState(true);
    const router = useRouter();

    useEffect(() => {
   if(password === confirmpass)
    setSamepass(true);
   else
    setSamepass(false);
 }, [password,confirmpass]);
 
 const handleSignup = async (e)=>
 {
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(e);
    const email = formdata.get("email");
    const password = formdata.get("password");
    try
    { const res = await fetch("api/signup",{
        method : "POST",
        body : JSON.stringify({email,password}),
        headers : {
             "Content-Type": "application/json",
        }
        });
        const data =  await res.json();
        if(!res.ok)
        {
           alert(data.error || "Signup failed");
            return;
        }
        else{
            alert("signup Seccessful")
            router.push("/login")
        }
    } catch(err)
    {
        console.log("signup error :",err)
        alert("Something went Wrong! Try again later.")
    }
 }

  return (
    <>
    <section className=" dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit = {handleSignup}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <div className = "flex relative">
                      <input id = "password" name = "password" type={eyeopen ? "text" : "password"} value = {password} onChange = {(v)=>{setPassword(v.target.value)}} placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                      {eyeopen ? <button type='button' onClick={()=>{setEyeopen(false)}}><img src="/eye.png" alt="" width={20} className='absolute right-3 top-2 z-10'/></button> :  <button type='button' onClick={()=>{setEyeopen(true)}}><img src="/eyecross.png" alt="" width={20} className='absolute right-3 top-2 z-10'/></button>}
                      </div>
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <div className = "flex relative">
                      <input type={eyeopen ? "text" : "password"} value = {confirmpass} onChange = {(v)=>{setConfirmpass(v.target.value)}} placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                      {eyeopen ? <button type='button' onClick={()=>{setEyeopen(false)}}><img src="/eye.png" alt="" width={20} className='absolute right-3 top-2 z-10'/></button> :  <button type='button' onClick={()=>{setEyeopen(true)}}><img src="/eyecross.png" alt="" width={20} className='absolute right-3 top-2 z-10'/></button>}
                      </div>
                     {samepass ? <div className = "h-2"></div> : <div className = "text-red-500 h-2 text-sm mx-2 ">
                        <span>Passwords don't match!</span>
                      </div>} 
                    </div>
                  
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link href="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Signup