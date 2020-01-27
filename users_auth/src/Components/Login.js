import React, { useState } from "react";
import { LoginUser } from "../utils/api";

function Login(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [data, setData] = useState({
    username: "",
    password: "",
    department: ""
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
      
    });
    console.log(handleChange, "Change")
  };

   const handleSubmit = async e => {
    e.preventDefault()
    try {
      await LoginUser(data)
      props.history.push("/")
    } catch (error) {
      const status = error.response && error.response.status
      switch (status) {
        case 401:
          setError("Incorrect email and/or password!")
          break
        default:
          setError(error.response)
      }
    }
  }

  // setTimeout(isLoading, 2000)

  return (
    <div>
      <section className='log-in'>
        
        {isLoading ? (
          <div className="spinner"><h2>Loading Data...</h2></div>
        ) : (
            null
          )}
        <form onSubmit={handleSubmit}>
          {error && <div className="error">
            {error}
          </div>}
          <div className="signInForm">
            <div className="signinCard">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
              />
               <input
                type="text"
                name="department"
                placeholder="Department"
                value={data.department}
                onChange={handleChange}
              />
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
