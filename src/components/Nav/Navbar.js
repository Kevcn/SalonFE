import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../images/logo.png'

const Nav = styled.nav`
  max-width: 1920px;
  position: absolute;
  width: 100%;
  background: transparent;
  height: 70px;
  display: flex;
  justify-content: space-between;
  z-index: 20;

  .logo {
    padding: 10px;    
  }

  .logo > img {
    max-height: 70px;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo} />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
