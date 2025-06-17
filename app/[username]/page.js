"use client"
import PaymentPage from '@/components/PaymentPage'
import {React,use} from 'react'
import { useEffect } from 'react'

const Username = ({params}) => {
  const resolvedParams = use(params);
  return (
    <>
    <PaymentPage username = {resolvedParams.username}/>
    </>
  )
}

export default Username