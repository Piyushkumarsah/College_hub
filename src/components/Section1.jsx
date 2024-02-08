import React from 'react'
import cheerfullGirl from '../assets/6463164.jpg'
import theme from './our_theme'

export default function Section1() {
    return (
        <>
            <div className='flex justify-center items-center h-screen bg-black  m-0'>
                <div className='flex  flex-col-reverse sm:flex-col-reverse lg:flex-row md:flex-col-reverse  justify-evenly items-center sm:items-center md:items-center mt-12'>
                    <div className='flex flex-col items-center justify-evenly'>
                        <div className='flex  items-center flex-col p-3'>
                            <h2 className='text-white text-6xl md:text-8xl mb-3 animate-bounce'>Empower!</h2>
                            <h2 className='text-slate-400 text-center text-2xl md:text-3xl m-auto'>"Your Academic Journey: Unlock a World of College Resources!"</h2>
                        </div>
                        <div className='x mt-5 flex flex-col justify-between' style={{height:"90px"}}>
                            <button className='w-40  h-10 rounded-md text-white font-bold hover:scale-110' style={{backgroundColor:"#f5a041",boxShadow:"rgba(5, 0, 38, 1.5) 0px 20px 25px -5px, rgba(40, 70, 50, 0.08) 0px 10px 10px -5px"}}>Get Started &gt;</button>
                            <button className='w-40  h-10 rounded-md border border-orange-400 text-white font-bold  hover:scale-110 -orange-400' style={{boxShadow:"rgba(5, 0, 38, 1.5) 0px 20px 25px -5px, rgba(40, 70, 50, 0.08) 0px 10px 10px -5px"}}>Join Now</button>
                        </div>
                    </div>
                    <div className=' -green-400 antialiased'>
                        <img className='rounded-full transition-transform transform hover:scale-105 duration-300 ease-in-out h-[300px] w-[300px] md:h-[400px] md:w-[400px]'  src={cheerfullGirl} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
