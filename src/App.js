import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import LoginPage from './Components/LoginPage/LoginPage';
import { useEffect } from 'react';
import { UseStateValue } from './Context/StateProvider';
import { auth } from './firebase';


function App() {
 
  //global state datastore
  const[{cart, user},dispatch] = UseStateValue();


  //check user
  useEffect(() => {
    const unsub =
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is still logged in..set global user
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //user has logged out..set global user null
        dispatch({
          type:"SET_USER",
          user: null,
        })
      }
    })

    //cleanup
    return () => unsub();
  }, [])
  //
  console.log("user>> ",user);



  //------------------RETURN----------------
  return (
    <div className="app">
      <Routes>

        {/* homepage --- */}
        <Route path='/' 
          element={<div>
            <Header/> 
            <HomePage/>
          </div>} />

        
        {/* loginpage--- */}
        <Route path='/login' 
          element={<LoginPage/>} />
          

        {/* checkoutpage---- */}
        <Route path='/checkout' 
          element={<div>
            <Header/> 
            <CheckoutPage/>
          </div>} />
        
      </Routes>      
    </div>
  );
}

export default App;
