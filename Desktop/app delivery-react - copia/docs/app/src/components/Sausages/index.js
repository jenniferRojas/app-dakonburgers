import React, { useState } from 'react';
import Navbar from '../Navbar';

import Sidebar from '../Sidebar';
import {
    SausagesContainer,
    SausagesContent,
    SausagesItems,
    SausagesH1,
    SausagesP,
    
  } from './SausagesElements';


  /*  import product8 from '../Products/Data/'*/
  import Products from '../Products';
import {productDatafive} from '../Products/Data'

  const Sausages = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    
    return (

      <>
        
        <SausagesContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <SausagesContent>
        <SausagesItems>
          <SausagesH1>CHORIZOS</SausagesH1>
          <SausagesP>AQUÍ PUEDES ENCONTRAR EL MEJOR CHORIZO SANTA ROSANO</SausagesP>
         </SausagesItems>
        
      </SausagesContent>
      
  </SausagesContainer>
  <Products data={productDatafive}/>
    </>
    
  );
};
   
export default Sausages;
