import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  link: string;
};

const CardComponent: React.FC<Props> = ({ title, image, link }) => {
  return (
    <Card>
      <Link to={link}>
        <p>{title}</p>
        <Gradient />
        <img src={image} alt={title} />
      </Link>
    </Card>
  );
};

const Card = styled.div`
  min-height: 15rem;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s;
  }
  p {
    position: absolute;
    z-index: 12;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    transition: all 1s;
  }

  :hover {
    img {
      transform: scale(115%);
    }
  }
`;

const Gradient = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default CardComponent;
