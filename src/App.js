import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';


function App() {
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
          element={<h1>login</h1>} />
          

        {/* checkoutpage---- */}
        <Route path='/checkout' 
          element={<div>
            <Header/> 
            <h1>checkout</h1>
          </div>} />
        
      </Routes>      
    </div>
  );
}

export default App;
