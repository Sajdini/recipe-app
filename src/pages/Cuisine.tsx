import React, { useState, useEffect } from "react";
//Components
import CardComponent from "../components/Card";
//types
import { fetchedData } from "../Types";
//dependencies
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const Cuisine: React.FC = () => {
  const [data, setData] = useState([] as fetchedData[]);

  const params = useParams().type!.toLowerCase();
  console.log(params);

  useEffect(() => {
    const getCuisine = async () => {
      const check = localStorage.getItem(params);

      if (check) {
        setData(JSON.parse(check));
      } else {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${params}`
          );
          if (response.ok) {
            const responseData = await response.json();
            setData(responseData.results);
            localStorage.setItem(params, JSON.stringify(responseData.results));
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCuisine();
  }, [setData, params]);
 
  return (
    <Grid>
      {data.map((recipe) => {
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
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(20rem, 1fr));
  grid-gap: 3rem;
  margin-inline: 20%;
`;

export default Cuisine;
