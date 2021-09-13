//asociated with sidebar component
import React, { useState } from 'react';
import Navbar from '../Navbar';
//import items card home
import Sidebar from '../Sidebar';
import {
    BodyContainer,
    BodyContent,
    BodyItems,
    BodyH1,
    BodyP,
    
  } from './BodyElements';

  const Body = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        
        <BodyContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <BodyContent>
        <BodyItems>
          <BodyH1>Bienvenido/a a Dakon Burgers</BodyH1>
          <BodyP>LAS MEJORES HAMBURGUESAS ARTESANALES</BodyP>
         </BodyItems>
      </BodyContent>
    </BodyContainer>
  );
};
   
export default Body;
