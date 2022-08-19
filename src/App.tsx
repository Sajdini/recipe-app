//react router dom
import { BrowserRouter as Router } from "react-router-dom";

//components
import Pages from "./pages/Pages";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  );
};

export default App;
