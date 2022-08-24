// components
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Hero from "../components/Hero";
import Desserts from "../components/Desserts";
// styled components


import styled from "styled-components";
const Home = () => {
  return (
    <>
      <Hero />
      <Slides id="weeklyPicks">
        <Veggie />
        <Popular />
        <Desserts />
      </Slides>
    </>
  );
};

const Slides = styled.div`
  background-color: #000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export default Home;
