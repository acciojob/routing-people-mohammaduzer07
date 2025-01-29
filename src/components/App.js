
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "regenerator-runtime/runtime";

const App = () => {
  
  const [users , setUser] = useState([]);

  useEffect(() =>{
    const getList = async () =>{
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const resJson = await res.json();
        setUser(resJson);

      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    }
    getList()
  }, [])

  
  return (
    <div>
        {/* Do not remove the main div */}
        <Router>
          <Routes>
            <Route path="/" element={ <UserList users={users}/> }></Route>
            <Route path="/users/:id" element={ <UserDetails users={users} />} ></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
