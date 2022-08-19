import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Search from "./Search";
import logo from "../logo.svg";

const Header: React.FC = () => {
  return (
    <NavContainer>
      <Container>
        <Logo>
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
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

const Logo = styled.div`
  max-width: 7rem;
  overflow: visible;
  img {
    width: 100%;
    fill: #fff;
  }
`;

export default Header;
