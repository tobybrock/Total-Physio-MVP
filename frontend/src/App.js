import "./App.css";
import "./index.css";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

//need to section app into components

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Total physio
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <Switch>
          <Route path="/product/:id" component={withRouter(ProductScreen)}></Route>
          <Route path="/" component={withRouter(HomeScreen)}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
