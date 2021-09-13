import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>RECOMENDADO</h1>
      <h1> Mazorcada Dakon </h1>
      <p>Maiz tierno, 140gr pollo, 160gr chorizo, cebolla grille, papa cabello de angel, salsa de la casa, queso doble crema gratinada.</p>
      <FeatureButton>Pídela Ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;