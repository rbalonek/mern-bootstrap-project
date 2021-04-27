import React, { useState } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import { Route, Switch } from "react-router-dom";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import ProductCreate from "./screens/ProductCreate/ProductCreate";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChangeLogin = () => {
    setIsLoggedIn(true);
  };

  const handleChangeLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            isLoggedIn={isLoggedIn}
            handleChangeLogout={handleChangeLogout}
            handleChangeLogin={handleChangeLogin}
          />
        </Route>

        <Route exact path="/products">
          <Products isLoggedIn={isLoggedIn} />
        </Route>

        <Route path="/add-product">
          <ProductCreate isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/products/:id/edit">
          <ProductEdit isLoggedIn={isLoggedIn} />
        </Route>

        <Route exact path="/products/:id">
          <ProductDetail
            isLoggedIn={isLoggedIn}
            handleChangeLogout={handleChangeLogout}
            handleChangeLogin={handleChangeLogin}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
