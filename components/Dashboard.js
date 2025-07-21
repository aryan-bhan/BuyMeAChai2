"use client"
import React, { useEffect, useState ,useRef } from 'react'
import { useSession} from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, UpdateProfile } from '@/actions/useractions'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'

const Dashboard = () => {

    const fileInputRef = useRef();
    const { data: session,status} = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    const [originalprofileURL, setOriginalprofileURL] = useState(null)
    const [profilepic, setprofilepic] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [coverurl, setCoverurl] = useState(null)

    useEffect( () => {
        if(status === "loading"){
            return;
        }
        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [session,status])
    
    if (status === "loading") {
    return <div className="text-center pt-20">Loading...</div>;
  }
    const getData = async () => {
        let u = await fetchuser(session.user.name)
        
        // const data = new FormData();
        // data.append("username" , form.username)
        console.log(u);
        const res = await fetch(`/api/profilepic?username=${session.user.name}`,
            {
                method : "GET",
            });
        let data = await res.json();
        console.log(data);
        setform(u)
        setOriginalprofileURL(data.imgurl+"?img-width=1000&img-height=1000");

        const res2 = await fetch(`/api/coverpic?username=${session.user.name}`,
            {
                method : "GET"
           }
        );
        let cpic = await res2.json();
        setCoverurl(cpic.imgurl+"?img-width=2000&img-height=2000");
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        let a = await UpdateProfile(e, session.user.name)
        toast('Profile Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

    const handleimagepreview = (e)=>
    {
        const file = e.target.files[0];
        if (file) 
        {
            setprofilepic(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file); // creates a base64 preview
        }
    }

    const handleimageupload = async ()=>
    {
        setIsUploading(true);
        console.log(profilepic);
        // console.log(form);

       const data = new FormData();
        data.set("file",profilepic);
        data.set("username",form.username)
        console.log(data);
       const uploadreq = await fetch("/api/profilepic/",
       {
            method : "POST",
            body : data
       });
       toast('Profile Picture Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        console.log(uploadreq.imgurl);
        setOriginalprofileURL(uploadreq.imgurl)
        setIsUploading(false);
        // setPreviewUrl(null)
    }

    const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleCoverChange = async (e) => {
  const file = e.target.files[0];
  if (file) {
            console.log('New cover image selected:', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverurl(reader.result);
            };
            reader.readAsDataURL(file);

        const data = new FormData();
        data.set("file",file);
        data.set("username",form.username)
        let res = await fetch("/api/coverpic/",
            {
                method : "POST",
                body : data
            }
        );
        toast('Profile Picture Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        console.log(res.imgurl)
  }
};

     return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <div className=''>
                <div className='w-full h-[400px] relative group'>
                    {coverurl ? <Image src= {coverurl} alt="No cover Pic" unoptimized fill className='object-cover'/> : <span>Loading...</span> }
                    {/* Hover overlay */}
                <div
                    className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={triggerFileInput}
                >
                <img src="/change.png" alt="" width={50} />
                </div>

                {/* Hidden file input */}
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleCoverChange}
                />
                </div>
                
                <div className='flex w-full mt-10 pb-10 px-5'>
                    <div className='ml-32 mr-10'>
                    <div className="relative w-96 h-96 ">
                   {previewUrl ? (
                        <Image
                            src={previewUrl}
                            alt="Preview"
                            fill
                            className='object-cover roundex-xl'
                        />
                    ) : ( originalprofileURL ? (<Image
                        src= {originalprofileURL}
                        alt="profile_image"
                        fill
                        className="object-cover rounded-xl"
                        unoptimized
                    /> ) : (<span className='text-black'>Loading</span>) )}
                    </div>
                    <div className='grid mt-5 grid-cols-2 gap-10'>
                    <label htmlFor="profile_image_upload" className='bg-blue-500 text-white rounded-xl p-2 text-center cursor-pointer hover:bg-blue-600 focus:ring-4 focus:ring-blue-300'>Uplaod Profile Image</label>
                    <input id = "profile_image_upload" onChange={handleimagepreview} type="file" accept='image/jpeg, image/jpg,image/png' className='hidden' />
                    <button disabled = {isUploading} onClick={handleimageupload} className='bg-blue-500 text-white rounded-xl p-2 text-center cursor-pointer  hover:bg-blue-600 '>Save Profile Image</button>
                    </div>
                    </div>  
                <div className='mx-auto bg-white w-1/2 p-10 rounded-3xl'>   
                <h1 className='text-center text-3xl font-bold'>Your Dashboard</h1>
                <form className="max-w-2xl mx-auto" action={handleSubmit}>
                    {/* input forusername */}
                    <div className='my-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input for email */}
                    <div className="my-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input razorpay id */}
                    <div className="my-2">
                        <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
                        <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    {/* input razorpay secret */}
                    <div className="my-2">
                        <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
                        <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    {/* Submit Button  */}
                    <div className="my-6">
                        <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none   dark:focus:ring-blue-800 font-medium text-sm">Save</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard