import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { fetchedData } from "../Types";
const Popular: React.FC = () => {
  const [data, setData] = useState([] as fetchedData[]);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData.recipes);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPopular();
  }, [setData]);

  return (
    <div>
      <Wrapper>
        <h3>Popular picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {data.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
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

const Card = styled.div`
  min-height: 25rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
