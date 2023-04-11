import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login'
import {
  BrowserRouter as Router, Routes , Route 
} from "react-router-dom";
import ProfileScreen from './screens/ProfileScreen';
import './App.css';
import { auth } from './firebase';
import { login , logout } from './features/userSlice';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const user = useSelector(selectUser) ;
  const dispatch = useDispatch() ;
  useEffect(()=>{
   const unsubscribe=  auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login(  {
          uid : userAuth.uid ,
          email : userAuth.email ,
          
        }        )) ;
        console.log('Logged in ' , userAuth) ;
      }
      else{
        dispatch(logout()) ;
      }
  return ()=> {unsubscribe() } ;
     })
  } , [dispatch]) ;
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route path = '/profile' element = {<ProfileScreen />}/>
            <Route path='/' element= {  !user ? <Login /> :<HomeScreen />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
