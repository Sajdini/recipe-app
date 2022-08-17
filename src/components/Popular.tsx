import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { fetchedData } from "../Types";
import CardComponent from "./Card";
const Popular: React.FC = () => {
  const [data, setData] = useState([] as fetchedData[]);

  useEffect(() => {
    const getPopular = async () => {
      //as spoonacular api calls as very limited, i had to cache the response in localstorage.
      const check = localStorage.getItem("popular");

      //checking if the data is already stored in localstorage. If yes, i set data state to that. If not, i make the api call
      if (check) {
        setData(JSON.parse(check));
      } else {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
          );

          if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem(
              "popular",
              JSON.stringify(responseData.recipes)
            );
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          console.log(error);
        }
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
            const { title, image, id } = recipe;
            return <CardComponent key={id} title={title} image={image} link={`/recipe/${id}`} />;
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;

export default Popular;
