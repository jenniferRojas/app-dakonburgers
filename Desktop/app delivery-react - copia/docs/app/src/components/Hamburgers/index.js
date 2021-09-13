import React, { useState } from 'react';
import Navbar from '../Navbar';

import Sidebar from '../Sidebar';
import {
    HamburgerContainer,
    HamburgerContent,
    HamburgerItems,
    HamburgerH1,
    HamburgerP,
    
  } from './HamburgersElements';


  /*  import product8 from '../Products/Data/'*/
  import Products from '../Products';
import {productDatathree} from '../Products/Data'

  const Hamburgers = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    
    return (

      <>
        
        <HamburgerContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HamburgerContent>
        <HamburgerItems>
          <HamburgerH1>HAMBURGUESAS</HamburgerH1>
          <HamburgerP>AQUÍ PUEDES ENCONTRAR TODAS NUESTRAS HAMBURGUESAS SOLAS.</HamburgerP>
         </HamburgerItems>
        
      </HamburgerContent>
      
  </HamburgerContainer>
  <Products data={productDatathree}/>
    </>
    
  );
};
   
export default Hamburgers;
