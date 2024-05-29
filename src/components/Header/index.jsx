import React from 'react';
import Menu from '../../assets/icons/menu.svg'
import User from '../../assets/icons/user.svg'

const Header = () => {
    return (
        <div className='fixed z-10 bg-white'>
            <div id='icons' className='flex justify-between p-6 '>
                <img src={Menu} alt="" />
                <img src={User} alt="" />
            </div>
            <div className='h-px w-screen bg-black'></div>
        </div>
    );
};

export default Header
