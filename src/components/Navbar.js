import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Dilshan Senanayaka</Logo>
      <Menu>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: transparent; /* Changed to transparent */
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
`;

const Menu = styled.div`
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    font-size: 1.2rem; /* Increased font size */
    
    padding: 0.3rem 0.6rem;
    border: 2px solid transparent;
    border-radius: 5px; /* Optional: Rounded corners for the border */
    transition: all 0.5s ease; /* Smooth transition for the border and hover effects */
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent}; /* Border color changes on hover */
    }
  }
`;

export default Navbar;
