import React from 'react'

export default function  () {
    const values1 = ['Job Ready','Common Applications'];
    const values2 = ['Carrer','Courses','Links','Loveria'];
    const values3 = ['Our Centers','Locations','Products','Baby'];
    const values4 = ['Identifications','Colleges','Campus','Students'];
  return (
    <div className='h-60 bg-slate-950 pt-8'>
        <div className='flex justify-evenly mx-10 '>
            <div className='flex flex-col  w-full text-white'>
                <h1 className='font-bold font-serif '>More to explore</h1>
                {
                    values1.map(key =>(
                        <div className='text-slate-400 pt-1'>
                            {key}
                        </div> 
                    ))
                }
            </div>
            <div className='flex flex-col  w-full text-white'>
                <h1 className='font-bold font-serif '>Get Links</h1>
                {
                    values2.map(key =>(
                        <div className='text-slate-400 pt-1'>
                            {key}
                        </div> 
                    ))
                }
            </div>
            <div className='flex flex-col  w-full text-white'>
                <h1 className=' font-bold font-serif'>Connect with Us</h1>
                {
                    values3.map(key =>(
                        <div className='text-slate-400 pt-1'>
                            {key}
                        </div> 
                    ))
                }
            </div>
            <div className='flex flex-col  w-full text-white'>
                <h1 className='font-bold font-serif pt-1'>Locations and Social Handles</h1>
                <div className='text-slate-400'><span>Lorem ipsum dolor sit amet consectetur adipisicing odit aut veniam tempore.</span></div>
                
            </div>
        </div>
    </div>
  )
}
