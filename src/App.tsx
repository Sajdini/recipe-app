//react router dom
import { BrowserRouter as Router } from "react-router-dom";

<<<<<<< HEAD
import styled from "styled-components";

//components
import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
=======
//components
import Pages from "./pages/Pages";
import Header from "./components/Header";
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289

const App: React.FC = () => {
  return (
    <Router>
<<<<<<< HEAD
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
=======
      <Header />
      <Pages />
    </Router>
  );
};
>>>>>>> 6021fd02adf45918f3ce7bdde027a0169f336289

export default App;
