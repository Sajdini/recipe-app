//react router dom
import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";

//components
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Pages />
        <Footer />
      </Layout>
    </Router>
  );
};
const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export default App;
