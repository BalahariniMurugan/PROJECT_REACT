import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-kzwb331v.us.auth0.com
//ZhakbQmN1pABA0CJs8edummkjSZ5fsIu
ReactDOM.render(
  //it means to get some info from the product into the filter

  <Auth0Provider
    domain="dev-kzwb331v.us.auth0.com"
    clientId="ZhakbQmN1pABA0CJs8edummkjSZ5fsIu"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);