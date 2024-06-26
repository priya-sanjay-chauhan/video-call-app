import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [value,setValue]=useState();

    const navigate=useNavigate()
    const handleJoinRoom=()=>{
      navigate(`/room/${value}`)
    }
  return (
      <div className='flex items-center justify-center h-screen'>
       <div className='w-full max-w-xs  flex flex-col gap-5  items-center p-4 border-2 border-sky-500 rounded'>
        <div>
            <p className='font-bold text-2xl p-4 text-sky-600' >Join the meeting</p>
        </div>
        <input type="text" className='border border-sky-400 rounded-xl px-4 py-2 w-full' value={value} onChange={(e)=> setValue(e.target.value)} placeholder='Enter Room Code' />
        <button onClick={handleJoinRoom} className='bg-sky-600 text-white w-full max-w-xs mx-auto p-4 border border-emerald-500 rounded-xl'>Join</button>
    </div>
   </div>
  )
}

export default HomePage