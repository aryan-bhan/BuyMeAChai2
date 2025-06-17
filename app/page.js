
export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-6 pb-24 pt-40 text-white items-center ">
      <div className="font-bold pl-12 flex gap-2 items-center  text-6xl">Patreon<span><img src="/tea.gif" width={60} alt="" /></span></div>
      <p>
        A crowdfunding platform for creators.
      </p>
      <div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Start Here</span></button>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Read More</span></button>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="container flex flex-col mx-auto mt-3 gap-5 py-20">
      <h2 className="text-2xl text-center text-white mb-10">Your supporters can buy you a Chai</h2>
      <div className="flex gap-5 justify-around text-white">
      <div className="item space-y-3 flex flex-col items-center">
          <img src="/man-hover-wave.gif" width={88} className=" bg-white rounded-full p-2" alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to help You</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center">
          <img src="/piggy-bank.gif" width={88} className=" bg-white rounded-full p-2 " alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to help You</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center">
          <img src="/fans.gif" width={88} className=" bg-white rounded-full p-2 " alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to help You</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="container flex flex-col mx-auto mt-3 gap-5 py-20">
      <h2 className="text-2xl text-center text-white mb-10">Learn more about us</h2>
      <div className="flex gap-5 justify-around text-white">
      <div className="item space-y-3 flex flex-col items-center">
          <img src="/man-hover-wave.gif" width={88} className=" bg-white rounded-full p-2" alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to help You</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center">
          <img src="/piggy-bank.gif" width={88} className=" bg-white rounded-full p-2 " alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to help You</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center">
          <img src="/fans.gif" width={88} className=" bg-white rounded-full p-2 " alt="" />
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your fans are available to help You</p>
        </div>
      </div>
    </div>
    </>
  );
}
