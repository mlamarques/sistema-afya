import React from 'react';
import { Link } from 'react-router-dom'
import { NavBarContent } from './style'
import LogoAfya from '../../assets/img/logo.png'

const NavBar: React.FC = () => {
    return (
        <NavBarContent>
            <img src={LogoAfya} alt="logo afya" />
            <div className='links-content'>
                <Link to="/">Home</Link>
                <Link to="/criar-conta">Criar Conta</Link>
                <Link to="/login">Logar</Link>
            </div>
        </NavBarContent>
    )
}

export default NavBar