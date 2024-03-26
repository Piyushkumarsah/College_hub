import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
export default function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkeDIn<FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href: 'https://www.linkedin.com/in/piyush-kumar-397928231/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={30}></FaGithub>
                </>
            ),
            href: 'https://github.com/Piyushkumarsah',

        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href: 'mailto:foo@gmail.com',

        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href: '/resume18july23.pdf',
            style: 'rounded-b-md',
            download: true,
        },
        

    ];
    return (
        <div className=' lg:flex flex-col top-[35%] left-0 fixed z-10'>
            <ul>
                {
                    links.map(({id,child,href,style,download}) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-green-500" + +  style}>
                            <a href={href} className='flex justify-between items-center w-full ' style={{color:"#f5a041"}} download={download} target='_blank' rel="noreferrer">
                                {child}
                            </a>
                        </li>
                    ))
                }

            </ul>

        </div>
    )
}

