// react router
import { Link } from "react-router-dom";
// styled components
import styled from "styled-components";
// logo img
import logo from "../logo.svg";
// react icons
import { BsGithub, BsLinkedin, BsFacebook, BsGoogle } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <h3>Recipe App</h3>
        <Info>
          <span>Samir Ajdini</span>
          <p>Junior web developer</p>
          <p>Skopje,Macedonia</p>
          <a href="tel:+38970670731">+38970670731</a>
        </Info>
        <Links>
          <a href="mailto:ajdinis1993@gmail.com">
            <BsGoogle /> Mail
          </a>
          <a href="https://github.com/Sajdini">
            <BsGithub /> Github
          </a>
          <a href="https://www.linkedin.com/in/samir-ajdini/">
            <BsLinkedin /> LinkedIn
          </a>
          <a href="https://www.facebook.com/samir.ajdini/">
            <BsFacebook /> Facebook
          </a>
        </Links>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  width: 100%;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  align-items: flex-start;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    90deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(54, 53, 53, 1) 100%
  );
  padding: 1rem;
  border: 1px solid #ddd;

  color: #fff;
  h3 {
    color: #ddd;
    padding: 0;
    margin: 0;
    font-size: 2.4rem;
  }

  @media (max-width: 44.69em) {
    h3 {
      display: none;
    }
  }
`;

const Logo = styled.div`
  width: 4rem;
  height: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  a {
    padding: 0;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  svg {
    height: 2rem;
    width: 2rem;
  }

  a {
    color: #fff;
    padding: 0;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #ddd;
  line-height: 1.3;
  font-size: 1rem;
  position: relative;

  span {
    font-size: 1.3rem;
  }

  p,
  a {
    font-size: 1.2rem;
    padding: 0;
  }
`;

export default Footer;
