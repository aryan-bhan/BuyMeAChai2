"use client"
import {Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','700'],
}); 

export default function Home() {
  return (
    <>
    <div  className="flex justify-center flex-col gap-6 pb-28 pt-40 text-black  items-center ">
      <div className={`${roboto.className} font-bold pl-20 flex items-center text-8xl w-[45rem]`}>Fund your creative work<span><img src="/tea.gif" width={300} alt="" /></span></div>
      <p className={`text-3xl font-sans`}> A crowdfunding platform for creators.</p>
      <div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white x">
      <span className="relative rounded-xl m-[0.05rem] px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">Start Here</span></button>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white ">
      <span className="relative rounded-xl px-8 m-[0.05rem] py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">Read More</span></button>
      </div>
    </div>

    <div className="container flex justify-center mx-auto mt-3 gap-5 pt-24">
      <div className='bg-white flex rounded-[3rem] flex-col py-5 items-center w-[90%] gap-3'>
        <div className='w-[85%] flex flex-col items-center m-4'>
        <div className="text-gray-400 text-xl font-semibold">SUPPORT</div>
        <div className='flex justify-center text-center flex-col w-[75%] gap-3'>
          <h2 className={`text-6xl font-bold leading-tight ${roboto.className}`}>Provide your audience an easy way to say thanks.</h2>
          <p className={`text-3xl leading-normal  ${roboto.className}`}>Buy Me a Chai makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a chai) and leave a message.</p>
        </div>
        </div>
        <div title='chai_message_depiction' className='relative w-full p-6 m-10 flex justify-center'>
            <div className='border-2 shadow-lg rounded-3xl w-[35%] px-3 flex flex-col'>
              <h5 className='font-bold text-2xl my-4 mx-2'>Buy Aryan a Chai!</h5>
              <div className='bg-[#fef0e4] flex rounded-lg border-2 border-[#ffe2cb] mb-2'>
                <button className='bg-white rounded-lg m-2 cursor-default p-2'><span>Pay ₹10</span></button>
                <button className='bg-white rounded-lg m-2 cursor-default p-2'><span>Pay ₹50</span></button>
                <button className='bg-white rounded-lg m-2 cursor-default p-2'><span>Pay ₹100</span></button>
                <div className='text-3xl p-2'><span>💜</span></div>
              </div>
              <div className='bg-gray-100 rounded-3xl h-32 my-4 p-4'>
              <p>Say something nice...</p>
              </div>
            </div>
             <div className='bg-white rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.25)] absolute top-[-16px] left-[24rem] pos p-[0.6rem] w-[3.25rem] h-[3.25rem] text-2xl'><span>💯</span></div>
              <div className='bg-white rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.25)] absolute top-40 left-[22rem] pos p-[0.6rem] w-[3.25rem] h-[3.25rem] text-2xl'><span>👋</span></div>
             <div title='message template' className='bg-white absolute right-40 bottom-20 flex rounded-3xl h-[8rem] w-[25%] gap-3 pt-3 px-3 shadow-[0_1px_8px_rgba(0,0,0,0.25)]'>
              <div><img src="/creator_thumbnail_3.png" alt="" className='w-20' /></div>
              <div className='flex flex-col gap-1'>
                <h1 className='font-bold  mt-1'>Arth paid ₹1500</h1>
                <p className='text-sm'>Absolutely love the show! I'm already waiting for the next week's episode,lol. Thanks and keep doing what you're best at.</p>
              </div>
             </div>
             <div title='message template' className='bg-white absolute left-44 top-28 flex rounded-3xl h-[15%] w-[20%] gap-3 pt-2 px-3 shadow-[0_1px_8px_rgba(0,0,0,0.25)]'>
              <img src="/creator_thumbnail_1.png" alt="" className='w-[1.75rem] h-[1.75rem]'/>
              <div className='flex flex-col gap-1'>
                <h1 className='font-bold  mt-1'>Arnay paid ₹500</h1>
              </div>
             </div>
             <div title='message template' className='bg-white absolute right-28 top-0 flex rounded-3xl h-[6rem] w-[25%] gap-3 pt-3 px-3 shadow-[0_1px_8px_rgba(0,0,0,0.25)]'>
              <div><img src="/creator_thumbnail_2.png" alt="" className='w-12' /></div>
              <div className='flex flex-col gap-1'>
                <h1 className='font-bold  mt-1'>Mahika paid ₹100</h1>
                <p className='text-sm'>Wow! Loved this episode , it was like a real documentary!🙌</p>
              </div>
             </div>
        </div>
      </div>
    </div>

    <div className="container flex justify-center mx-auto mt-3 gap-5 pt-24">
      <div className='bg-white flex rounded-[3rem] flex-col py-5 items-center w-[90%] gap-3'>
        <div className='w-[85%] flex flex-col items-center m-4'>
        <div className="text-gray-400 text-xl font-semibold">POSTS, AUDIO & EMAIL</div>
        <div className='flex justify-center text-center flex-col w-[75%] gap-3'>
          <h2 className={`text-6xl font-bold leading-tight ${roboto.className}`}>Publish your best work</h2>
          <p className={`text-3xl leading-normal  ${roboto.className}`}>Buy Me a Chai makes it easy to publish free and exclusive content. Try different formats such as audio, pdf files etc.</p>
        </div>
        </div>
        <div title='chai_message_depiction' className='relative w-full p-6 m-10 flex justify-center'>
            <img src="posts_v8.png" alt="" className='w-3/4'/>
        </div>
      </div>
    </div>

    <div className='container flex flex-col items-center mx-auto mt-3 pt-24 pb-24'>
    <h2 className={`text-6xl font-bold leading-tight ${roboto.className}`}>Designed for creators,</h2>
    <h2 className={`text-6xl text-gray-500 font-bold leading-tight ${roboto.className}`}>not for businesses.</h2>
    <div className='grid grid-cols-2 flex-wrap w-4/5 gap-y-10 gap-x-36 pt-10'>
      <div className='flex gap-x-5 w-full items-start'>
        <img width='32' height='32' className='pt-2' src='/checkmark-circle-svgrepo-com.svg'></img>
        <div className='text-xl font-semibold'>
        <p className='text-gray-600'>We don't call them "customers" or transactions. They are your </p>
        <span className='text-black'>supporters.</span>
        </div>
      </div>
      <div className='flex gap-x-5 w-full items-start'>
        <img width='32' height='32' className='pt-2' src='/checkmark-circle-svgrepo-com.svg'></img>
        <div className='text-xl font-semibold'>
        <p className='text-gray-600'>You have <span className='text-black'>100% ownership</span> of your supporters. We never email them, and you can export the list any time you like.</p>
        </div>
      </div>
      <div className='flex gap-x-5 w-full items-start'>
        <img width='32' height='32' className='pt-2' src='/checkmark-circle-svgrepo-com.svg'></img>
        <div className='text-xl font-semibold'>
        <p className='text-gray-600'>You get to <span className='text-black'>talk to a human</span> for help, or if you just like some advice to hit the ground running.</p>
        </div>
      </div>
      <div className='flex gap-x-5 w-full items-start'>
        <img width='32' height='32' className='pt-2' src='/checkmark-circle-svgrepo-com.svg'></img>
        <div className='text-xl font-semibold'>
        <p className='text-gray-600'>You get paid instantly to your bank account. <span className='text-black'>No more 30-day delays.</span></p>
        </div>
      </div>
    </div>
    </div>

    </>
  );
}