import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;

  li {
    padding: 10px 30px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    li {
      color: #fff;
    }
  }
`;

const DIV = styled.div`
  /* background: antiquewhite; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RightNav = ({ open }) => {
  return (
    <DIV>
      <Ul open={open}>
        <li>HOME</li>
        <li>SERVICES</li>
        <li>CONTACT US</li>
      </Ul>
    </DIV>    
  )
}

export default RightNav
