import React, { useState, useEffect } from 'react';
import axios from "axios"
import {GetUsers} from "../utils/api"


// function Card(props) {
//   return (
//   <div>
// <h1> Users: {props.username}</h1>
// {props.children}
//   </div>
//   )
// }

function Users() {

  const [users, setUsers] = useState([])

    useEffect(() => {
    GetUsers().then((users) => {
      console.log(users)
      setUsers(users)
    })
  }, [])
  return (
    <div>
      {users && users.map((user)=><div key={user.id}>{user.username}<br/><br/></div>)}
    </div>
  )
}

//   useEffect(() => {
//     axios
//       .get('http://localhost:4000/api/users/')
//       .then((res) => {
//         setUsers(res.data)
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
// //   }, [])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World</h1>
       

//       {/* {users.map(user => 
//       <div>{user.username} </div>)}
//             {users.map(user => (
//                     <div key={users.id}>
//                         <Card username={user} />
//                     </div>
//                 ))} */}
// {/* <div>users: {users}</div> */}
    
//       {/* <div> 
//        {users.map((users) => 
//        <Card key={users.id} users={users.username} key={users.users} /> )}

//        </div> */}
//        <div> {users && users.map((user)=><div key={user.id}>{user.username}</div>
//        )}</div>
    
//       </header>
//     </div>
//   );
// }

export default Users;
