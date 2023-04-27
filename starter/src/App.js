import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import { auth } from './firebase';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {

    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      }
      else {
        setUserName('');
      }
      console.log(user)
    })
  }, [])
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home name={userName} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
