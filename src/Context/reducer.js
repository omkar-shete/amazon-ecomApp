//1.defining the initial state of the data store
export const initialState = {
  cart:[
  //   {
  //   id:"random04",
  //   title:"boAt Bassheads 242 in Ear Wired Earphones with Mic(Carbon Black)",
  //   price:1199,
  //   stars:5,
  //   img:"https://m.media-amazon.com/images/I/81oztXbAKaL._SX679_.jpg"
  // },
  ],
  user: null,
}


//array manipulation...bcz cart array is here
//nothing to do with reducer....
//array.reduce is a seperate method
export const getCartTotal = (cart) => (
  cart?.reduce( (prevValue, cartItem) => prevValue + cartItem.price ,0)
  //start at prevValue=0 and keep adding cartItem.price on loop
)




//2.reducer fn: 
//takes actiontypes and returns execution logic on the state using switch-cases

const reducer = (state, action) => {
  //for debugging
  console.log("action>>" ,action);
  //
  switch (action.type) {
    case "ADD_TO_CART":
      //add cart logic
      //returing the new data store state
      return{
        ...state,
        cart: [...state.cart, action.item ],
      };
      // break;

    case "REMOVE_FROM_CART":
      //remove cart logic
      let newCart = [...state.cart];
      const index =  newCart.findIndex((cartItem) => cartItem.id===action.id );
      if (index>=0) {
        //item exists,remove
        newCart.splice(index,1);
        //replace 1 element @index with nothing, ie remove
      } else {
        //item not present
        console.warn(`Item not present in the cart, id:${action.id}`)
      }

      return{
        ...state,
        cart: newCart,
      };
      // break;
    default:
      return state;
  }
}

export default reducer;