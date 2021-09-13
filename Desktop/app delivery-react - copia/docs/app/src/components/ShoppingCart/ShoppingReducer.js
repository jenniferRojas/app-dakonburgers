import { TYPES } from "../ShoppingCart/ShoppingActions";

export const shoppingInitialState = {
    products:[
        {ID: 1,  name:'COMBO HAMBURGUESA DAKON',Price:16.000},
        {ID: 2,  name:'COMBO HAMBURGUESA SUPER DAKON',Price:20.000},
        {ID: 3,  name:'COMBO CHORI HAMBURGUESA DAKON',Price:20.000},
        {ID: 4,  name:'CERVEZA CORONA',Price:7.000},
        {ID: 5,  name:'CERVEZA CLUB COLOMBIA',Price:4.000},
        {ID: 6,  name:'COCA COLA',Price:2.000},
        {ID: 7,  name:'CHORI CHORI HAMBURGUESA DAKON',Price:17.000},
        {ID: 8,  name:'SUPER TRIPLE DAKON',Price:26.000},
        {ID: 9,  name:'SUPER CHORIHAMBURGUESA DAKON',Price:26.000},
        {ID: 10, name:'RES CARNES DAKON',Price:26.000},
        {ID: 11, name:'COMBO HAMBURGUESA DAKON POLLO',Price:16.000},
        {ID: 12, name:'COMBO CHORI PERRO DAKON',Price:16.000},
        {ID: 13, name:'COMBO SUPER CHORIHAMBURGUESA DAKON ',Price:30.000},
        {ID: 14, name:'CHORI PERRO DAKON',Price:12.000},
        {ID: 15, name:'CHORI PAPA DAKON',Price:13.000},
        {ID: 16, name:'PICADA DAKON (2 PERSONAS)',Price:29.000},
        {ID: 17, name:'SUPER PICADA DAKON ',Price:40.000},
        {ID: 19, name:'COSTILLAS DAKON',Price:22.000},
        {ID: 20, name:'AZORCADA DAKON ',Price:20.000},
        {ID: 22, name:'COCA COLA SIN AZÚCAR',Price:2.500},
        {ID: 23, name:'QUATRO ',Price:2.500},
        {ID: 24, name:'SPRITE',Price:2.500},
        {ID: 25, name:'AGUA BOTELLA',Price:2.000},
        {ID: 26, name:'AGUA BOTELLA CON GAS',Price:2.000},
        {ID: 27, name:'CERVEZA POKER',Price:3.500},
        {ID: 32, name:'COMBO SUPER TRIPLE DAKON',Price:30.000},
    ],

cart:[],


};
export function shoppingReducer(state, action) {
  
    switch (action.type) {
      case TYPES.ADD_TO_CART: {
        console.log(state)
        console.log(action)
        let newItem = state.products.find(
          (product) => product.ID === action.payload
        );
        console.log(newItem);

       //Search the product by ID, add or remove the products requested by the customer (functional programming)

 
  
        let itemInCart = state.cart.find((item) => item.ID === newItem.ID);
  
        return itemInCart
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.ID === newItem.ID
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: [...state.cart, { ...newItem, quantity: 1 }],
            };
      }
      case TYPES.REMOVE_ONE_FROM_CART: {
        let itemToDelete = state.cart.find((item) => item.ID === action.payload);
  
        return itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.ID === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.ID !== action.payload),
            };
      }
      case TYPES.REMOVE_ALL_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter((item) => item.ID !== action.payload),
        };
      }
      case TYPES.CLEAR_CART:
        return shoppingInitialState;
      default:
        return state;
    }
  }