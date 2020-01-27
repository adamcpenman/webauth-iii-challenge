import React, { useState } from "react"
import { SignupUser, LoginUser } from "../utils/api"

export default function Signup(props) {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    department: ""
  })

  const [error, setError] = useState()

  const handleChange = e => {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await SignupUser(account)
      try {
        await LoginUser({
          username: account.username,
          password: account.password,
          department: account.department
        })
        props.history.push("/")
      } catch (error) {
        const status = error.response && error.response.status
        setError(`${status}: ${error.response}`)
      }
    } catch (error) {
      const status = error.response && error.response.status
      setError(`${status}: ${error.response}`)
    }
  }
  

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <br />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={account.username}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={account.password}
        onChange={handleChange}
        required
      />
      <input
                type="text"
                name="department"
                placeholder="Department"
                value={account.department}
                onChange={handleChange}
              />
      <br />
      <button>Sign Up!</button>
    </form>
  )
}