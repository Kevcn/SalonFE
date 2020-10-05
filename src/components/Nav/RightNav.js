import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;

  a {
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;

    /* background-image: linear-gradient(transparent, white);
    border-radius: 100px;
    width: 110px;
    text-align: center;
    margin: 0 10px; */
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
  padding-right: 50px;
`;

const RightNav = (props) => {
  return (
    <DIV>
      <Ul open={props.open}>
        <Link to='/' className="" onClick={() => props.setOpen(!props.open)}>HOME</Link>
        <Link to='/' className="" onClick={() => props.setOpen(!props.open)}>SERVICES</Link>
        <Link to='/' className="" onClick={() => props.setOpen(!props.open)}>CONTACT US</Link>
      </Ul>
    </DIV>    
  )
}

export default RightNav
