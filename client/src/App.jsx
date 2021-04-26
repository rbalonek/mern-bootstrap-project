import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import { Route, Switch } from "react-router-dom";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
