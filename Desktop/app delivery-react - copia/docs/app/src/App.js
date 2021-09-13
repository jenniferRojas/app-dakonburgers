import React, { useReducer } from "react";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch, Route
  } from "react-router-dom";

import { GlobalStyle } from "./globalstyles";
import { productData, productDataTwo, productDatathree, productDatafour, productDatafive, productDatasix, productDataseven } from './components/Products/Data.js';
import Footer from './components/Footer';
import Hamburgers from './components/Hamburgers';
import Home from "./components/Home";
import Burgerscombos from "./components/Burgerscombos";
import Sausages from "./components/Sausages";
import Specials from "./components/Specials/";
import Drinks from "./components/Drinks/";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { shoppingReducer } from "./components/ShoppingCart/ShoppingReducer";
import { shoppingInitialState } from "./components/ShoppingCart/ShoppingReducer";
import { TYPES } from "./components/ShoppingCart/ShoppingActions";

export const CartContext = React.createContext()


function App() {
  /* console.log (productData)
  console.log (productDataTwo)
  console.log (productDatathree)
  console.log (productDatafour)
  console.log (productDatafive)
  console.log (productDatasix)
  console.log (productDataseven) */
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });

    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch, addToCart, delFromCart, clearCart }}>

    
    <Router>
      <GlobalStyle/>
      <Navbar />
     
      <Switch/>
  
      <Route path='/app-dakonburgers' exact component={Home}/>
      <Route path='/app-dakonburgers/Hamburguesas'  component={Hamburgers} />
      <Route path='/app-dakonburgers/CombosHamburguesas' component={Burgerscombos}/>
      <Route path='/app-dakonburgers/Chorizos'  component={Sausages} />
      <Route path='/app-dakonburgers/Especiales'  component={Specials} />
      <Route path='/app-dakonburgers/Bebidas'  component={Drinks} />
      <ShoppingCart/>
      
       
      <Switch/>
      

      <Footer/>
      </Router>
      </CartContext.Provider>
  );
}

export default App;