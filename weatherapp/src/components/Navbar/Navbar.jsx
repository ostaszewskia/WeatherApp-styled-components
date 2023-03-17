import React, { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from '../../styles/Navbar.style';
import LogoImg from '../../assets/logo.png';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'>Home</NavbarLink>
            <NavbarLink to='/weather'>Weather</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (<NavbarExtendedContainer>
        <NavbarLinkExtended to='/'>Home</NavbarLinkExtended>
        <NavbarLinkExtended to='/weather'>Weather</NavbarLinkExtended>
      </NavbarExtendedContainer>)}
    </NavbarContainer>
  );
};

export default Navbar;
