//import
import { createContext, useContext, useReducer } from "react";



//1.creating the data store
export const StateContext = createContext();
 

//2.providing the access
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//3.using the store
export const UseStateValue = () =>  useContext(StateContext);