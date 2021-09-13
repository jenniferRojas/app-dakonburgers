import React, { useState } from 'react';
import Navbar from '../Navbar';

import Sidebar from '../Sidebar';
import {
    DrinksContainer,
    DrinksContent,
    DrinksItems,
    DrinksH1,
    DrinksP,
    
  } from './DrinksElements';


  /*  import product8 from '../Products/Data/'*/
  import Products from '../Products';
import {productDataseven} from '../Products/Data'

  const Drinks = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    
    return (

      <>
        
        <DrinksContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <DrinksContent>
        <DrinksItems>
          <DrinksH1>BEBIDAS</DrinksH1>
          <DrinksP>AQUÍ PUEDES ENCONTRAR TODAS LAS BEBIDAS PARA ACOMPAÑAR LO MEJOR DE DAKON</DrinksP>
         </DrinksItems>
        
      </DrinksContent>
      
  </DrinksContainer>
  <Products data={productDataseven}/>
    </>
    
  );
};
   
export default Drinks;
