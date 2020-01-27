import React from "react"
import { Route } from "react-router-dom"
import AuthForm from "./Components/Auth"
// import Dashboard from "./components/Dashboard"
// import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (

    <div>
      <h1>Hello World</h1>
      {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
      <Route exact path="/login" render={(props) => <AuthForm {...props} isLogin />} />
      <Route exact path="/signup" render={(props) => <AuthForm {...props} />} />
    </div>
  )
}