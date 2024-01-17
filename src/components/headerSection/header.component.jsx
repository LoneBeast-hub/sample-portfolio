// React icons
import { GiHamburgerMenu } from 'react-icons/gi';
// hooks
import { useState, useEffect } from 'react';
// react icons
import { ImCancelCircle } from 'react-icons/im';
// components
import CustomButton from '../customButton/customButton.component';
// React router
import { Link } from 'react-router-dom';

const Header = () => {
    // toggle menu state
    const [toggleMenuState, setToggleMenuState] = useState(false);
    // is screen width medium? state
    const [isScreenWidthMd, setIsScreenWidthMd] = useState(false);
    // screen width state
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // I want to know when the screen is at this size
    const handleResize = () => {
        // Update the screenWidth state on resize
        setScreenWidth(window.innerWidth);

        // Specify the desired width condition
        const specificWidth = 768; // Adjust as needed

        // Check if the screen width meets the condition
        if (window.innerWidth <= specificWidth) {
            setIsScreenWidthMd(true);
        } else {
            setIsScreenWidthMd(false);
        }
    };

    useEffect(() => {
        // Attach the resize event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // invoke the handleResize function immediately on component mount
        handleResize();
    
        // Detach the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    // handle Link click
    const handleLinkClick = () => {
        // if screen width is md
        if(isScreenWidthMd) {
            // close the menu bar
            setToggleMenuState(false);
        }
    }
    
    return(
        <div className="relative bg-[--primary-color] w-full border-b border-b-[#0000001a]">
            {/* Adjuster */}
            <div className="max-w-[1280px] w-[85%] mx-auto py-4 flex justify-between items-center">
                {/* Logo */}
                <div className='flex-grow'>
                    {/* Remember to make this into a dynamic image */}
                    <p className="text-[--secondary-color] text-xl fresh_tea">Jack Co.</p>
                </div>
                {/* Nav Links */}
                <nav className={`overflow-hidden sm:flex-grow sm:static sm:w-[fit-content] ${toggleMenuState? 'flex items-center w-[100%] h-[100vh] fixed left-0 top-0 bg-[--accent-color]': 'w-0'} `}>
                    {/* cancel menu */}
                    <ImCancelCircle onClick={() => {
                        setToggleMenuState(!toggleMenuState)
                    }} className={`text-white text-2xl absolute sm:hidden top-8 left-[50%] translate-x-[-50%] ${toggleMenuState? 'block' : 'hidden'}`} />
                    <ul className={`text-white sm:gap-4 sm:text-[--secondary-color] text-sm flex items-center w-full sm:w-[fit-content] sm:flex-row ${toggleMenuState? 'flex-col gap-4' : ''} `}>
                        <li onClick={handleLinkClick}><Link to='/'>Home</Link></li>
                        <li onClick={handleLinkClick}><a href='#about'>About</a></li>
                        <li onClick={handleLinkClick}><a href='#portfolio'>Portfolio</a></li>
                        <li onClick={handleLinkClick}><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                {/* Menu toggler and email me */}
                <div className='flex items-center gap-2'>
                    {/* Menu Toggler */}
                    <GiHamburgerMenu onClick={() => {
                        // toggle menu
                        setToggleMenuState(!toggleMenuState);
                    }} className='text-xl sm:hidden cursor-pointer text-[--secondary-color]'/>
                    {/* Email me */}
                    <CustomButton>Email Me</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Header;