import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import styled from "styled-components";
const Home = () => {
  return (
    <Slides>
      <Veggie />
      <Popular />
    </Slides>
  );
};

const Slides = styled.div`
  margin-inline: 20%;
`;
export default Home;
