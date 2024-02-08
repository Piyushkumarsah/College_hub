import React from 'react'
import SocialMediaIcons from './SocialMediaIcons';
export default function () {
    const values1 = ['Job Ready', 'Common Applications'];
    const values2 = ['Carrer', 'Courses', 'Links', 'Loveria'];
    const values3 = ['Our Centers', 'Locations', 'Products', 'Baby'];
    const values4 = ['Identifications', 'Colleges', 'Campus', 'Students'];
    return (
        <div className=' bg-slate-950 md:h-80 text-white' >
            <div className='mx-12 pt-7 h-full items-center flex flex-col justify-end'>
                <div className='flex flex-col md:flex-row  w-full h-full' style={{ fontfamily: "'Inter', sans-serif" }}>
                    <div className='flex flex-col mt-3 w-full'>
                        <h1 className='font-bold text-2xl'>More to explore :-</h1>
                        {
                            values1.map(key => (
                                <div className='text-slate-400 pt-1 ' style={{ fontFamily: "'Diphylleia', 'serif'" }}>
                                    {key}
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col mt-3 w-full'>
                        <h1 className='font-bold text-2xl'>Get Links :-</h1>
                        {
                            values2.map(key => (
                                <div className='text-slate-400 pt-1' style={{ fontFamily: "'Diphylleia', 'serif'" }}>
                                    {key}
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col mt-3  w-full'>
                        <h1 className=' font-bold text-2xl' >Connect with Us :-</h1>
                        {
                            values3.map(key => (
                                <div className='text-slate-400 pt-1' style={{ fontFamily: "'Diphylleia', 'serif'" }}>
                                    {key}
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-col mt-3 w-full '>
                        <h1 className='font-bold text-2xl pt-1' >Locations and Social Handles :-</h1>
                        <div className='text-slate-400' style={{ fontFamily: "'Diphylleia', 'serif'" }}><span>Lorem ipsum dolor sit amet consectetur adipisicing odit aut veniam tempore.</span></div>
                        <SocialMediaIcons></SocialMediaIcons>
                    </div>

                </div>
                <h1 className='inline text-6xl' style={{fontFamily: "'Protest Revolution', sans-serif"}}>College_<span className='text-orange-400'>HUb</span></h1>

            </div>
        </div>
    )
}
