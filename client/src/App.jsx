import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import { Route, Switch } from "react-router-dom";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import ProductCreate from "./screens/ProductCreate/ProductCreate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
