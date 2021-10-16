
// styles
import GlobalStyles from "./GlobalStyles";

// react router
import { Route, Switch } from 'react-router-dom';

// components
import Nav from "./components/Nav";

// pages
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <GlobalStyles />

      <Nav />

      <Switch>

      <Route to="/" exact>
        <HomePage />
      </Route>
      
      <Route to="/AboutPage" exact>
        <AboutPage />
      </Route>

      <Route to="/OrderPage" exact>
        <OrderPage />
      </Route>

      </Switch>

    </>
  );
}

export default App;
