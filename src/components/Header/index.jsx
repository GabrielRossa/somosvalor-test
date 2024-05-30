import React, { useEffect, useState } from 'react';
import Menu from '../../assets/icons/menu.svg';
import User from '../../assets/icons/user.svg';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleToggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`z-10 bg-white fixed w-full ${shadow ? 'drop-shadow-lg' : ''} transition-shadow duration-300`}>            
        <div
            id='links'
            className={`flex z-20 flex-col fixed bg-white h-screen w-4/5 text-2xl gap-10 pt-32 px-10 shadow-2xl transition-transform transform ${menuActive ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <a href="">Home</a>
            <a href="">Pacientes</a>
            <a href="">Sobre</a>
        </div>
            <div id='buttons' className='flex justify-between p-6 lg:hidden'>
                <button className='z-30' onClick={handleToggleMenu}>
                    <img src={Menu} alt="Menu" />
                </button>
                <button>
                    <img src={User} alt="User" />
                </button>
            </div>
            <div className='hidden lg:flex lg:justify-evenly lg:items-center h-24 text-2xl font-semibold m-auto' style={{ maxWidth: '80rem' }}>
                <a href="" className='hover:scale-110 duration-200'>Home</a>
                <a href="" className='hover:scale-110 duration-200'>Pacientes</a>
                <a href="" className='hover:scale-110 duration-200'>Sobre</a>
                <a href="" className='hover:scale-110 duration-200'>Minha conta</a>
            </div>

            <div className='h-px w-screen bg-black lg:hidden'></div>
            {menuActive && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-0"
                    onClick={closeMenu}
                ></div>
            )}

        </div>
    );
};

export default Header;
