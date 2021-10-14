import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'

//Custom components 

import Users from './components/Users';
import HomePage from './components/HomePage';
import User from './components/User';

//user.name -> user.first + user.last, 
// user.location, 
// user.uuid, 
// user.picture.medium, 
// user.post ->streach, 
// user.email

const admin = {
  location: {
    state: 'FL'
  },
  login:{
  uuid: '12345'
  },
  picture: {
    medium: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-845712410.jpg?w=2119",
  },
  name:{
    first: 'Ksu'
  },
  email:"123@123.123"
}

function App() {
  const [users, setUsers] = useState([admin])

  useEffect (() => {
    axios.get('https://randomuser.me/api/')
    .then(res =>{
      console.log(res.data.results)
      setUsers([...users, ...res.data.results])
    }).catch(err => console.error(err))

  }, [])

  return (
    <div className="App">
      <header> 
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Friends Page</Link>
        </nav>
      </header>
      <Route path ='/users/:id'>
        <User users={users} />
      </Route>

      <Route exact path ='/users'>
        <Users users={users}/>
      </Route>
    
      <Route exact path ='/'>
       <HomePage />
      </Route>
      
    </div>
  );
}

export default App;
