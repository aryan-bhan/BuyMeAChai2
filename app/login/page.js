'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { useEffect } from 'react'

const Login = () => {
    useEffect(() => {
            document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

  return (
    
<div className=" flex flex-col justify-center pt-14 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-200 max-w">
            Or
            <a href="#" className="font-medium text-[rgb(136,208,255)] hover:text-[rgb(165,219,255)]">
                &nbsp;create an account
            </a>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-12 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address"></input>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password"></input>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-white">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-[rgb(136,208,255)] hover:text-[rgb(165,219,255)]">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        Sign in
                    </button>
                </div>
            </form>
            <div className="mt-6">

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex  justify-center text-sm">
                        <span className="px-2 rounded-lg bg-white  text-gray-800">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                    <div>
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt=""></img>
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={()=>{signIn("github", { callbackUrl: "/dashboard" });}}
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img className="h-5 w-5" src="/github-mark.png"
                                alt=""></img>
                        </a>
                    </div>
                    <div>
                        <a href="#"  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img className="h-5 w-5" src="https://www.svgrepo.com/show/506498/google.svg"
                                alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
  )
}

export default Login