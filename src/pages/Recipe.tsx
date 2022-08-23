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
    <RecipeContainer>
      <DetailWrapper>
        <TitleAndPicture>
          <h2>{data.title}</h2>
          <img src={data.image} alt={data.title} />
        </TitleAndPicture>
        <Info>
          <Buttons>
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
          </Buttons>
          <DescriptionAndList>
            <Description>
              {activeTab === "instructions" ? (
                <h3 dangerouslySetInnerHTML={{ __html: data.summary }}></h3>
              ) : (
                <h3
                  dangerouslySetInnerHTML={{ __html: data.instructions }}
                ></h3>
              )}
            </Description>
            <ul>
              {data.extendedIngredients?.map(
                (ingredient: { id: number; original: string }) => {
                  return <li key={ingredient.id}>{ingredient.original} </li>;
                }
              )}
            </ul>
          </DescriptionAndList>
        </Info>
      </DetailWrapper>
    </RecipeContainer>
  );
};

const RecipeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 0;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    90deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(54, 53, 53, 1) 100%
  );
<<<<<<< HEAD
  @media (max-width: 46.87em) {
    padding: 1rem;
  }
=======
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289
`;
const DetailWrapper = styled.div`
  border-radius: 8px;
  padding: 2rem;
  margin: 0 5rem;
<<<<<<< HEAD
  display: grid;
  grid-template-columns: repeat(2, minmax(35rem, 1fr));
  grid-column-gap: 2rem;
=======
  display: flex;
  justify-content: center;
  gap: 4rem;
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289
  background-color: #000;
  color: #fff;
  ul {
    padding-left: 1.8rem;
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
<<<<<<< HEAD

  // media queries on the grid wrapper
  @media (max-width: 46.87em) {
    grid-template-columns: 1fr;
    margin: 0 1rem;
    padding: 1rem 3rem;
  }
`;

const TitleAndPicture = styled.div`
=======
`;

const TitleAndPicture = styled.div`
  max-width: 50rem;

>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289
  h2 {
    margin-bottom: 4rem;
    font-size: 2.2rem;
    color: #fff;
  }
  img {
<<<<<<< HEAD
    width: 100%;
=======
    max-width: 100%;
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289
    border-radius: 8px;
  }
`;

<<<<<<< HEAD
const DescriptionAndList = styled.div`
  width: 100%;
`;
=======
const DescriptionAndList = styled.div``;
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289

const Description = styled.div`
  h3 {
    font-size: 1.4rem;
    color: #ddd;
  }
  a {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-right: 1rem;
<<<<<<< HEAD
  // media queries on the buttons
  @media (max-width: 46.87em) {
    justify-content: flex-start;
    margin-top: 2rem;
  }
=======
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289
`;
const Button = styled.button`
  padding: 1rem 2rem;
  border: 2px solid #000;
  background: linear-gradient(35deg, #494949, #313131);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  &.active {
    color: #313131;
    background: #fff;
  }
`;

<<<<<<< HEAD
const Info = styled.div``;
=======
const Info = styled.div`
  max-width: 60rem;
`;
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289

export default Recipe;
