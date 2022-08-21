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
`;

const Container = styled.div`
  padding-inline: 1rem;
  backdrop-filter: blur(5px);
  width: 45%;
  height: 100%;
  margin-left: 15rem;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;

  h3 {
    margin: 0;
    padding-top: 15rem;
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
