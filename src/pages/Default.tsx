import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Default = () => {
  return (
    <Container>
      <Wrapper>
        <h2>No results were found </h2>
        <Link to="/">Go Back</Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  height: 30rem;
  background-color: #000;
  margin-top: 15rem;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  h2 {
    color: #fff;
    font-size: 4rem;
  }

  a {
    background: rgb(62, 62, 62);
    padding: 1.7rem 6rem;
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    transition: all 500ms;

    :hover {
      box-shadow: #fff 0px 1px 3px 0px, #fff 0px 0px 0px 1px;
    }
  }
  @media (max-width: 40.63em) {
    width: 90%;
  }
`;

export default Default;
