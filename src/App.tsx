//react router dom
import { BrowserRouter as Router } from "react-router-dom";

//components
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import Search from "./components/Search";

const App: React.FC = () => {
  return (
    <Router>
      <Search />
      <Categories />
      <Pages />
    </Router>
  );
};

export default App;
