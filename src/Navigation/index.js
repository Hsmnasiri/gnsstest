import React from 'react';
import { ReactComponent as LogoSvg } from '../images/logo.svg';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoSvg height={90} width={100} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/about">About</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/map">Map</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/contact-us">Contact Us</NavBtnLink>
          </NavBtn>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-up">SignUP</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/setting">Setting</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
