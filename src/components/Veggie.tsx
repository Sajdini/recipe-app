import React, { useEffect } from "react";
import styled from "styled-components";

import { fetchedData } from "../Types";
import CardComponent from "./Card";
import { useHttpClient } from "../hooks/http-hook";

//
const Veggie: React.FC = () => {
  const { getRecipe, data, isLoading } = useHttpClient([] as fetchedData[]);

  useEffect(() => {
    getRecipe(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`,
      "veggie"
    );
  }, [getRecipe]);

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else
    return (
      <Wrapper>
        <Text>
          <h1>
            Fancy some <br /> veggie recipes?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus
            enim illo voluptatum natus. Voluptatibus eaque alias in corrupti
            rerum quam, laudantium, quasi, cumque nemo sunt veritatis. Ipsam,
            debitis sequi?
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  max-width: 100%;
`;

export default Veggie;
