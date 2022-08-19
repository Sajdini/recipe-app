// react hooks
import React, { useState, useEffect } from "react";
//react-router
import { useParams } from "react-router-dom";
//styled components
import styled from "styled-components";
import { fetchedData } from "../Types";
//custom hooks
import { useHttpClient } from "../hooks/http-hook";

const Recipe: React.FC = () => {
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams().id!;

  const { getRecipe, data, isLoading } = useHttpClient({} as fetchedData);

  useEffect(() => {
    getRecipe(
      `https://api.spoonacular.com/recipes/${parseInt(
        params
      )}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
      null
    );
  }, [getRecipe, params]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <DetailWrapper>
      <TitleAndPicture>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
      </TitleAndPicture>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Description>
          {activeTab === "instructions" ? (
            <h3 dangerouslySetInnerHTML={{ __html: data.summary }}></h3>
          ) : (
            <h3 dangerouslySetInnerHTML={{ __html: data.instructions }}></h3>
          )}
        </Description>
        <ul>
          {data.extendedIngredients?.map(
            (ingredient: { id: number; original: string }) => {
              return <li key={ingredient.id}>{ingredient.original} </li>;
            }
          )}
        </ul>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 10rem 0 5rem;
  display: flex;
  justify-content: center;
  gap: 4rem;

  ul {
    padding-left: 1.8rem;
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const TitleAndPicture = styled.div`
  max-width: 50rem;

  h2 {
    margin-bottom: 4rem;
    font-size: 2.2rem;
  }
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

const Description = styled.div`
  h3 {
    font-size: 1.4rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

const Info = styled.div`
  max-width: 60rem;
`;

export default Recipe;
