import React from "react";

// styled components
import styled from "styled-components";
//react-icons
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiFriedFish, GiCroissant } from "react-icons/gi";
// react-router
import { NavLink } from "react-router-dom";

const Categories: React.FC = () => {
  return (
    <CategoriesContainer>
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
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  gap: 3rem;
  justify-self: flex-end;
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
  h4 {
    color: #ddd;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;

    color: #fff;
  }

  &.active {
    background: linear-gradient(to right, #1ba7b5, #1bb582);
  }
`;

export default Categories;
