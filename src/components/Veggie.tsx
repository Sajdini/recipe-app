import React, { useEffect } from "react";
import styled from "styled-components";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
      <div>
        <Wrapper>
          <h3>Veggies</h3>
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
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
          </Splide>
        </Wrapper>
      </div>
    );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;

export default Veggie;
