import React from 'react';
import Logo from "../../images/Yaydoo.gif";

const Header = () => {
    return (
        <header>
        <a href='#'>
        <div>
            <div className='logo'>
                <img width={100} src={Logo} />
            </div>
        </div>
        </a>
        <ul>
            <li>
                <a href='#'>Inicio</a>    
            </li>
            <li>
                <a href='#'>Productos</a> 
            </li>
        </ul>
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item_total'>0</span>
        </div>
        </header>
    );
};

export default Header;