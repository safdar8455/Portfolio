import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="menueIcon">
        <ul className="navbar-list">
          <li>
            <NavLink to="/Portfolio/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/about" className="navbar-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/services" className="navbar-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
  }

  li {
    list-style: none;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;

export default Navbar;