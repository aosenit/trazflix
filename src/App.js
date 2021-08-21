import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const users = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
     const unsubscribe = auth
      .onAuthStateChanged((userAuth) => {
        if(userAuth){
         dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
         }))
        }
        else{
          dispatch(logout())
        }
      })

      return unsubscribe
  }, [dispatch])
  return (
    <div className="app">
    <Router>
     
        {!users ? (<Login />) 
        :( 
          <Switch> 
            <Route path='/profile'> <ProfileScreen /> </Route>
            <Route path='/' exact> <HomeScreen /> </Route>
          </Switch>
         )}
      
     
    </Router>
    </div>
  );
}

export default App;
