//react hooks
import React, { useEffect } from "react";
//components
import CardComponent from "../components/Card";
//types
import { fetchedData } from "../components/Types";
//react router
import { useParams, useNavigate } from "react-router-dom";
//styled components
import styled from "styled-components";
// custom hook
import { useHttpClient } from "../hooks/http-hook";

const Searched: React.FC = () => {
  const params = useParams().searched!;
  const navigate = useNavigate();
  const { getRecipe, data, isLoading } = useHttpClient([] as fetchedData[]);

  useEffect(() => {
    getRecipe(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params}`,
      null
    );
  }, [getRecipe, params]);
  console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!isLoading && data.length === 0) {
    navigate("/");
  }

  return (
    <Container>
      <Title>
        <h1>Results for '{params}' </h1>
      </Title>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 3rem auto;
  gap: 5rem;

  @media (max-width: 22.75em) {
    text-align: center;
  }
`;
const Title = styled.div`
  h1 {
    font-size: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(20rem, 1fr));
  grid-gap: 3rem;
`;

export default Searched;
