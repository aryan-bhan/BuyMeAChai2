import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

import GithubProvider from "next-auth/providers/github"
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb'


export const authoptions =  NextAuth({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      })
    ],
    pages: {
      singIn : "/login"
  },
  callbacks:{
    async signIn({ user,account, email }) {
      if(account.provider === "github")
        {
          await connectDB();
          console.log(user);
          const currentUser = await User.findOne({email : user.email})
          // console.log(currentUser);
          console.log('test2');
          if(!currentUser)
          {
            console.log('test');
            const newUser = await User.create({
              email : user.email,
              username : user.email.split("@")[0]
            })
          }
        }  
      return true;
    },
    async session({ session, user, token }) {
      console.log(session)
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username;
      // console.log(session.user.name)
      return session
    },
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after login
      return url.startsWith(baseUrl) ? url : baseUrl + "/dashboard";
    }
  }
  })

  export {authoptions as GET , authoptions as POST}