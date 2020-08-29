import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  /* width: 100%; */
  background: transparent;
  height: 70px;
  /* border-bottom: 2px solid #222831; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
