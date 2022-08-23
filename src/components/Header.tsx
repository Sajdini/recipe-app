import React, { useState } from "react";
import styled from "styled-components";

//react router
import { Link } from "react-router-dom";
// components
import Categories from "./Categories";
import Search from "./Search";
import logo from "../logo.svg";

import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <NavContainer>
      <Container>
        <Logo to="/">
          <img src={logo} alt="chef hat" />
        </Logo>
        <NavAndSearchLinks>
          <DropDownMenu>
            <GiHamburgerMenu
              onClick={() => setVisibility((prevstate) => !prevstate)}
            />
            <Categories isVisible={visibility} />
          </DropDownMenu>
          <Search />
        </NavAndSearchLinks>
      </Container>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #ccc;
`;
const Container = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  max-width: 6.5rem;

  img {
    width: 100%;
    fill: #fff;
  }

  @media (max-width: 37.5em) {
    display: none;
  }
`;

const NavAndSearchLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  @media (max-width: 37.5em) {
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
  }
`;
const DropDownMenu = styled.div`
  position: relative;
  svg {
    display: none;
  }

  @media (max-width: 37.5em) {
    svg {
      display: block;
      color: #fff;
      width: 3rem;
      height: 3rem;
    }
  }
`;
export default Header;
