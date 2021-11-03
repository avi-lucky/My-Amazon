import { Route, Switch } from "react-router-dom";

import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Shop />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
