import React from 'react'
import Navbar from './Navbar';
import Section1 from './Section1';
import SocialLinks from './SocailLinks';
import Section2 from './Section2';
import ActiveUser from './ActiveUsers';
import Footer from './Footer';
export default function Home(){
    return (
        <div>
            <SocialLinks></SocialLinks>
            <Navbar></Navbar>
            <Section1>
            </Section1>
            <ActiveUser></ActiveUser>
            <Section2>
            </Section2>
            <Footer></Footer>
        </div>
    )
}
