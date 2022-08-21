import React from "react";
import styled from "styled-components";

//react router
import { Link } from "react-router-dom";
// components
import Categories from "./Categories";
import Search from "./Search";
import logo from "../logo.svg";

const Header: React.FC = () => {
  return (
    <NavContainer>
      <Container>
        <Logo to="/">
          <img src={logo} alt="chef hat" />
        </Logo>
        <div>
          <Categories />
          <Search />
        </div>
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
  div {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
`;

const Logo = styled(Link)`
  max-width: 6.5rem;

  img {
    width: 100%;
    fill: #fff;
  }
`;

export default Header;
