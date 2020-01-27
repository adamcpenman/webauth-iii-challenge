import React from "react"
import { Route } from "react-router-dom"
import AuthForm from "./Components/Auth"
import Users from "./Components/Users"
import PrivateRoute from "./Components/PrivateRoute"

export default function App() {
  return (

    <div>
      <h1>Hello World</h1>
      <PrivateRoute exact path="/users" component={Users} />
      <Route exact path="/login" render={(props) => <AuthForm {...props} isLogin />} />
      <Route exact path="/signup" render={(props) => <AuthForm {...props} />} />
    </div>
  )
}


// import React, { useState, useEffect } from 'react';
// import './App.css';

// import Login from './Components/Login'
// import Signup from './Components/Signup'

// // function Card(props) {
// //   return (
// //   <div>
// // <h1> Users: {props.username}</h1>
// // {props.children}
// //   </div>
// //   )
// // }

// function App() {

//   // const [users, setUsers] = useState([])

//   // useEffect(() => {
//   //   axios
//   //     .get('http://localhost:4000/api/users/')
//   //     .then((res) => {
//   //       setUsers(res.data)
//   //       console.log(res.data)
//   //     })
//   //     .catch((err) => {
//   //       console.log(err)
//   //     })
//   // }, [])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World</h1>
//         <Login />
//         <Signup/>

//       {/* {users.map(user => 
//       <div>{user.username} </div>)} */}
//             {/* {users.map(user => (
//                     <div key={users.id}>
//                         <Card username={user} />
//                     </div>
//                 ))} */}
// {/* <div>users: {users}</div> */}
    
//       {/* <div> 
//        {users.map((users) => 
//        <Card key={users.id} users={users.username} key={users.users} /> )}

//        </div> */}
    
//       </header>
//     </div>
//   );
// }

// export default App;
