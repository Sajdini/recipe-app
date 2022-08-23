import React from "react";

// styled components
import styled from "styled-components";
//react-icons
import { FaPizzaSlice, FaHome } from "react-icons/fa";
import { GiNoodles, GiFriedFish, GiCroissant } from "react-icons/gi";

// react-router
import { NavLink } from "react-router-dom";

type Props = {
  isVisible: boolean;
};
type DivProps = {
  visible: boolean;
};

const Categories: React.FC<Props> = ({ isVisible }) => {
  return (
    <CategoriesGroup visible={isVisible}>
      <Category to="/">
        <FaHome />
        <h4>Home</h4>
      </Category>
      <Category to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Category>
      <Category to="/cuisine/French">
        <GiCroissant />
        <h4>French</h4>
      </Category>
      <Category to="/cuisine/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </Category>
      <Category to="/cuisine/Greek">
        <GiFriedFish />
        <h4>Greek</h4>
      </Category>
    </CategoriesGroup>
  );
};

const CategoriesGroup = styled.div<DivProps>`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  gap: 3rem;
  justify-self: flex-end;

  @media (max-width: 37.5em) {
    display: ${(props) => (props.visible ? "flex" : "none")};
    position: absolute !important;
    top: 2.7rem;
    left: 0;
    z-index: 100;
    flex-direction: column;
    gap: 0.3rem;
    background-color: #000;
    width: 20rem;
  }
`;

const Category = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  padding: 0 1rem;
  transition: active 400ms;
  border-radius: 20px;
  :first-child {
    display: none;
  }
  h4 {
    color: #ddd;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
    display: block !important;
    color: #fff;
  }

  &.active {
    background: linear-gradient(to right, #1ba7b5, #1bb582);
  }

  @media (max-width: 37.5em) {
    flex-direction: row-reverse;
    justify-content: space-between;
    transition: all 300ms;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    padding: 1rem;
    &.active {
      background: none;
    }
    :first-child {
      display: flex;
    }

    :hover {
      background: rgb(62, 62, 62);
    }
  }
`;

export default Categories;
