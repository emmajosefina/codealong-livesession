import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


const NavLinkStyled = styled(NavLink)`
        color: black;
        &.active {
            color: tomato;
        }
` 


const Header = () => {



    return (
            <header>
                <nav>
                <NavLinkStyled to="/details" className={({isActive}) => 'default.class' + (isActive ? "my-custom-classname" : "")}>
                    Details
                </NavLinkStyled>
                <NavLinkStyled to="/">List</NavLinkStyled>
               

                </nav>
            </header>
    )

}

export default Header