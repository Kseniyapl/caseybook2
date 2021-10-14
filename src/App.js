import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

//user.name -> user.first + user.last, 
// user.location, 
// user.uuid, 
// user.picture.medium, 
// user.post ->streach, 
// user.email

function App() {
  const [user, setUser] = useState([])

  useEffect (() => {
    axios.get('https://randomuser.me/api/')
    .then(res =>{
      console.log(res)
    }).catch(err => console.error(err))

  }, [])

  return (
    <div className="App">
      <h1>  
        Kseniya Platonava
      </h1>
      <h2>Comming Soon</h2>

    </div>
  );
}

export default App;
