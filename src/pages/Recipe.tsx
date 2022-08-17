// react hooks
import React, { useState, useEffect } from "react";
//react-router
import { useParams } from "react-router-dom";
//styled components
import styled from "styled-components";

type Ingredients = {};

type RecipeType = {
  id: number;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  extendedIngredients: { id: number; original: string }[];
};

const Recipe: React.FC = () => {
  const [data, setData] = useState({} as RecipeType);
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams().id!;

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${parseInt(
            params
          )}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
          const responseData = await response.json();

          setData(responseData);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, [setData, params]);
  console.log(activeTab);

  return (
    <DetailWrapper>
      <div>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
      </div>
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
          <h3 dangerouslySetInnerHTML={{ __html: data.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: data.instructions }}></h3>
        </Description>
        <ul>
          {data.extendedIngredients?.map((ingredient) => {
            return <li key={ingredient.id}>{ingredient.original} </li>;
          })}
        </ul>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 10rem 5% 5rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
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
`;

const Info = styled.div``;

export default Recipe;
