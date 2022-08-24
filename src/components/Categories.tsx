import React from "react";
// react router
import { NavLink } from "react-router-dom";
// styled components
import styled from "styled-components";
//react-icons
import { FaPizzaSlice, FaHome } from "react-icons/fa";
import { GiNoodles, GiFriedFish, GiCroissant } from "react-icons/gi";

type Props = {
  isVisible: boolean;
  clickHandler: () => void;
};
type DivProps = {
  visible: boolean;
};

const Categories: React.FC<Props> = ({ isVisible, clickHandler }) => {
  // instead of hard coding multiple category components, an array of objects with each category details was created to populate a single component
  const categories = [
    {
      link: "/",
      title: "home",
      icon: <FaHome />,
    },
    {
      link: "/cuisine/Italian",
      title: "Italian",
      icon: <FaPizzaSlice />,
    },
    {
      link: "/cuisine/French",
      title: "French",
      icon: <GiCroissant />,
    },
    {
      link: "/cuisine/Thai",
      title: "Thai",
      icon: <GiNoodles />,
    },
    {
      link: "/cuisine/Greek",
      title: "Greek",
      icon: <GiFriedFish />,
    },
  ];

  return (
    <CategoriesGroup visible={isVisible}>
      {categories.map((category) => {
        return (
          <Category to={category.link} onClick={clickHandler}>
            {category.icon}
            <h4>{category.title}</h4>
          </Category>
        );
      })}
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
