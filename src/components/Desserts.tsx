import React, { useEffect } from "react";
import styled from "styled-components";

import { fetchedData } from "../Types";
import CardComponent from "./Card";
import { useHttpClient } from "../hooks/http-hook";

//

const Desserts = () => {
  const { getRecipe, data, isLoading } = useHttpClient([] as fetchedData[]);

  useEffect(() => {
    getRecipe(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dessert`,
      "dessert"
    );
  }, [getRecipe]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <Wrapper>
        <Text>
          <h1>Don't forget to check our dessert recipes!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nemo, tempora ipsum excepturi, delectus libero aliquam
            temporibus ipsam nesciunt incidunt quis voluptate consequatur
            deserunt, modi alias odit non nostrum. Vitae.
          </p>
        </Text>
        <Grid>
          {data.map((recipe: fetchedData) => {
            const { title, image, id } = recipe;
            return (
              <CardComponent
                key={id}
                title={title}
                image={image}
                link={`/recipe/${id}`}
              />
            );
          })}
        </Grid>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  border: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    90deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(54, 53, 53, 1) 100%
  );
  padding: 2rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  // media querry for whole Wrapper
  @media (max-width: 36em) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  gap: 3rem;
  h1 {
    margin-top: 20%;
    font-size: 4.5rem;
    font-weight: 900;
    color: #fff;
  }
  p {
    color: #ddd;
    font-size: 1.7rem;
    max-width: 90%;
    line-height: 2.5rem;
  }

  // medua querry for text part
  @media (max-width: 43.75em) {
    margin: 0;
    justify-content: center;
    h1 {
      margin-top: 2rem;
      font-size: 4rem;
    }

    p {
      max-width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  max-width: 100%;

  //media query for the grid part
  @media (max-width: 43.75em) {
    padding-right: 1rem;
    grid-template-columns: repeat(2, 1fr);
    max-height: 45rem;
    overflow: scroll;
  }
  @media (max-width: 36em) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

export default Desserts;
