import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
  } from "../actions";
  
  const filter_reducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
      //we get the array of prices of all products and then find max from it
      let maxPrice = action.payload.map((p) => p.price);
      //console.log(maxPrice);
      //we can't pass array in max so we use spread operator.
      maxPrice = Math.max(...maxPrice);
      //console.log(maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    }
  
    if (action.type === SET_GRIDVIEW) {
      return { ...state, grid_view: true };
    }
  
    if (action.type === SET_LISTVIEW) {
      return { ...state, grid_view: false };
    }
  
    if (action.type === UPDATE_SORT) {
      return { ...state, sort: action.payload };
    }
  
    if (action.type === SORT_PRODUCTS) {
      const { sort, filtered_products } = state;
      /*setting temp product default value as filetred product,
      so that if any sort method doesn't match then tempProduct is not set to empty array*/
      let tempProducts = [...filtered_products];
  
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products: tempProducts };
    }
  
    if (action.type === UPDATE_FILTERS) {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
  
    if (action.type === FILTER_PRODUCTS) {
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      /*before starting filtering we would want to set up the
      filter products with fresh set of products for another filter process*/
      let tempProducts = [...all_products];
  
      //filtering functionality
      //text
      /*it will filter out products as per whatever is typed in the 
      search bar */
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
  
      //category
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
  
      //company
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
  
      //color
      if (color !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }
  
      //price
      tempProducts = tempProducts.filter((product) => product.price <= price);
  
      //shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        );
      }
  
      return { ...state, filtered_products: tempProducts };
    }
  
    /*as we want the max and min price to be set as previous, so
    we copy/destructure old key data in filter, and override the values i want to clear*/
    if (action.type === CLEAR_FILTERS) {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }
    throw new Error(`No Matching "${action.type}" - action type`);
  };
  
  export default filter_reducer;