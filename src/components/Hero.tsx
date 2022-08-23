import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <Container>
        <h3>Your guide to coking any receipt you want</h3>
        <p>
          Search through our vast collection of recipes. Choose your favorite
          cuisine, favorite ingredient, or type of food
        </p>
        <Button>
          <a href="#weeklyPicks">
            Check our weekly choices &nbsp;&nbsp;
            <strong style={{ fontSize: "2.5rem" }}> &#8594;</strong>
          </a>
        </Button>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: bottom;
  border-bottom: 1px solid #ccc;
  @media (max-width: 40.62em) {
    padding: 5rem 0;
    height: min-content;
  }
`;

const Container = styled.div`
  padding-inline: 1rem;
  backdrop-filter: blur(5px);
  width: 45%;
  min-width: 38rem;
  height: 100%;
  margin-left: 15rem;
  border-inline: 1px solid #ccc;
  padding-top: 15rem;

  h3 {
    margin: 0;
    font-size: 5rem;
    color: #fff;
    letter-spacing: 0.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  p {
    color: #ddd;
    font-size: 1.5rem;
    letter-spacing: 0.4rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 40.62em) {
    padding: 2rem;
    margin-left: 5rem;
    height: min-content;
    border: 1px solid #ccc;
  }

  h3 {
    font-size: 3.8rem;
    color: #fff;
    letter-spacing: 0.4rem;

    margin-bottom: 1rem;
  }
  p {
    color: #ddd;
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 25em) {
    padding: 1rem;
    margin: 0 auto;
    width: 95%;
    min-width: 90%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Button = styled.div`
  position: relative;
  width: fit-content;
  border: 1px solid #ddd;
  ::before {
    content: "";
    background-color: #ccc;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  a {
    padding: 2rem 1rem 2rem 2rem;
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    z-index: 30;
    display: block;
  }
`;
export default Hero;
