import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"
import User from '@/models/User'
import connectDB from '@/db/connectDb'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'

export const authoptions =  NextAuth({
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
        clientId : process.env.GOOGLE_ID,
        clientSecret : process.env.GOOGLE_SECRET,
      }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");
        return {
          id: user._id,
          name: user.username,
          email: user.email,
        };
      },
    })
    ],
    pages: {
      signIn : "/login"
  },
  callbacks:{
    async signIn({ user,account, email }) {
      if(account.provider === "github")
        {
          await connectDB();
          const currentUser = await User.findOne({email : user.email})
          if(!currentUser)
          {
            const newUser = await User.create({
              email : user.email,
              username : user.email.split("@")[0]
            })
          }
        }
      if(account.provider === "google")
      {
        await connectDB();
        const currentuser = await User.findOne({email : user.email})
        if(!currentuser)
        {
          console.log('User not found so creating a user!');
          await User.create({
            email : user.email,
            username : user.email.split("@")[0]
          })
        }
      }
      return true;
    },
    async session({ session, token }) {
      if(token.provider === "credentials")
      {
        session.user = token.user
        return session;
      }

      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username;
      return session
    },
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after login
      return url.startsWith(baseUrl) ? url : baseUrl + "/dashboard";
    },
     async jwt({ token, user ,account }) {
    if (account && user) {
    token.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    token.provider = account.provider;
  }
  return token;
  }
  },
   session: {
    strategy: "jwt",
  },
  })

  export {authoptions as GET , authoptions as POST}