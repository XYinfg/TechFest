import React, {useEffect, useState} from 'react'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Inventory from './components/Inventory'

function App() {

  const [backendData, setbackendData] = useState([{}])

  useEffect(() => { 
    fetch('/api').then( // fetch api route on server.js
      response => response.json() // json response from server.js
    ).then(
      data=> {
        setbackendData(data) // set data from json to data variable
      }
    )
  }, []) // empty array means this effect will only run once

  return ( // display nav bar and route to path selected
    <div>
      <Router>
        <Nav /> 
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/inventory' element={<Inventory/>} />
        </Routes>
        <p>React App</p>
      </Router>
      {(typeof backendData.users == 'undefined') ? ( // if data is undefined (no users/api being fetched), display loading
        <p>loading...</p>
      ): (
        backendData.users.map((user, i) => ( // map users to p tags of key i
          <p key={i}>{user}</p> // display user
        ))
      )}
    </div>
  )
}

export default App