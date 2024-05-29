import React, { useState } from 'react';
import Menu from '../../assets/icons/menu.svg';
import User from '../../assets/icons/user.svg';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleToggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <div className="z-10 bg-white fixed w-full">
            <div
                id='links'
                className={`flex z-20 flex-col fixed bg-white h-screen w-4/5 text-2xl gap-10 pt-32 px-10 shadow-2xl transition-transform transform ${
                    menuActive ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <a href="">Home</a>
                <a href="">Pacientes</a>
                <a href="">Sobre</a>
                <a href="" className="hidden">Minha conta</a>
            </div>
            <div id='buttons' className='flex justify-between p-6'>
                <button className='z-30' onClick={handleToggleMenu}>
                    <img src={Menu} alt="Menu" />
                </button>
                <button>
                    <img src={User} alt="User" />
                </button>
            </div>
            <div className='h-px w-screen bg-black'></div>
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
