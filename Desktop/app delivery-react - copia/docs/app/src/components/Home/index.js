import React from 'react'
import Body from '../Body'
import Feature from '../Feature'
import Products from '../Products'
import { productData, productDataTwo } from '../Products/Data'



const Home = () => {
    return (
        <div>
           <Body/>
           
           <Products heading='FAVORITAS DAKON' data={productData} />
           <Feature/>
        <Products heading='LA MEJOR COMPAÑIA' data={productDataTwo} />
    
            
        
        
        </div>
    )
}

export default Home
