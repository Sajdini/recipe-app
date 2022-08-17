//react hooks
import React, { useEffect, useState } from "react";
//components
import CardComponent from "../components/Card";
//types
import { fetchedData } from "../Types";
//react router
import { useParams } from "react-router-dom";
//styled components
import styled from "styled-components";

const Searched: React.FC = () => {
  const [data, setData] = useState([] as fetchedData[]);
  const params = useParams().searched;

  useEffect(() => {
    const getSearched = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params}`
        );

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData.results);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSearched();
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

export default Searched;
