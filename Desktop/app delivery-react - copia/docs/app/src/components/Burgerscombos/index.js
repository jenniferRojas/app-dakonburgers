import React, { useState } from 'react';
import Navbar from '../Navbar';

import Sidebar from '../Sidebar';
import {
  BurgerscombosContainer,
  BurgerscombosContent,
  BurgerscombosItems,
  BurgerscombosH1,
  BurgerscombosP,
    
  } from './BurgerscombosElements';


  
  import Products from '../Products';
import {productDatafour} from '../Products/Data'

  const Burgerscombos = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    
    return (

      <>
        
        <BurgerscombosContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <BurgerscombosContent>
        <BurgerscombosItems>
          <BurgerscombosH1>COMBOS HAMBURGUESAS</BurgerscombosH1>
          <BurgerscombosP>AQUÍ PUEDES ENCONTRAR TODAS NUESTRAS HAMBURGUESAS EN COMBO.</BurgerscombosP>
         </BurgerscombosItems>
        
      </BurgerscombosContent>
      
  </BurgerscombosContainer>
  <Products data={productDatafour}/>
    </>
    
  );
};
   
export default Burgerscombos;

