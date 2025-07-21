import React from 'react'
import connectDB from '@/db/connectDb';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export const POST = async (req)=>
{
    await connectDB();
    const {email,password} = await req.json();
    console.log(email,password);
    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    // 3. Hash password
    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
        email : email.toLowerCase(),
        username : email.split("@")[0],
        password : hashedPassword
    })

     return NextResponse.json({
      message: 'User created successfully',
      user: {
        email: newUser.email,
        username: newUser.username,
      },
    });
};