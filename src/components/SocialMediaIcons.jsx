import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-start pt-3 pb-3" >
      <FaInstagram className="text-[#f5a041] text-2xl mr-3 hover:scale-125" />
      <FaLinkedin className="text-[#f5a041] text-2xl mx-3 hover:scale-125" />
      <FaTwitter className="text-[#f5a041] text-2xl mx-3 hover:scale-125" />
      <FaFacebook className="text-[#f5a041] text-2xl mx-3 hover:scale-125" />
      {/* Add more icons as needed */}
    </div>
  );
};

export default SocialMediaIcons;
