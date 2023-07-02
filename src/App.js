import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    //will only run once the appcomponents load...

    auth.onAuthStateChanged(authUser =>{
      console.log(authUser);
      if(authUser){
       //the user just logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })

      } else{
       //logged out
       dispatch({
        type:'SET_USER',
        user:null
       })
      }
    })
  },[])


  return (
    // BEM Convention
    <Router>
    <div className="app"> 
    
     {/* Header */}
     <Header/>
     


      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Checkout" element={<Checkout/>}></Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
