// react icons
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className="w-full bg-[--primary-color] py-8">
            {/* Adjuster */}
            <div className="max-w-[1280px] w-[85%] mx-auto flex flex-col md:flex-row items-center gap-4 md:justify-between md:gap-0">
                {/* Logo */}
                <div>
                    {/* Remember to make this into a dynamic image */}
                    <p className="text-[--secondary-color] text-xl fresh_tea">Jack Co.</p>
                </div>
                {/* Copyright */}
                <p className="text-[--secondary-color] text-sm">&copy; {currentYear} Jack Co. All rights reserved. </p>
                {/* Icons */}
                <div className="flex gap-2">
                    {/* icon */}
                    <div className='p-2 bg-[--secondary-color] rounded-lg'>
                        <FiFacebook className='text-lg text-white' />
                    </div>
                    {/* icon */}
                    <div className='p-2 bg-[--secondary-color] rounded-lg'>
                        <BiLogoLinkedin className='text-lg text-white' />
                    </div>
                    {/* icon */}
                    <div className='p-2 bg-[--secondary-color] rounded-lg'>
                        <BiLogoInstagram className='text-lg text-white' />
                    </div>
                    {/* icon */}
                    <div className='p-2 bg-[--secondary-color] rounded-lg'>
                        <FiTwitter className='text-lg text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;