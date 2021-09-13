import React, { useState } from 'react';
import Navbar from '../Navbar';

import Sidebar from '../Sidebar';
import {
    SpecialsContainer,
    SpecialsContent,
    SpecialsItems,
    SpecialsH1,
    SpecialsP,
    
  } from './SpecialsElements';



  import Products from '../Products';
import {productDatasix} from '../Products/Data'

  const Specials = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    
    return (

      <>
         <SpecialsContainer>
       
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <SpecialsContent>
        <SpecialsItems>
          <SpecialsH1>ESPECIALES</SpecialsH1>
          <SpecialsP>AQUÍ PUEDES ENCONTRAR  ESPECIALIDADES DAKON.</SpecialsP>
         </SpecialsItems>
        
      </SpecialsContent>
      
  </SpecialsContainer>
  <Products data={productDatasix}/>
    </>
    
  );
};
   
export default Specials;
