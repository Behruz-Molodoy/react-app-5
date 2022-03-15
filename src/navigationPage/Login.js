import React, { useContext, useState } from 'react'
import { Context } from '../App'
import './styles/Login.css'
export default function Login() {
  const [isLoading, setLoading] = useState(false)
  const [auth , setAuth] = useState('')
  const { setUser } = useContext(Context)
  const changeUser = (e) => {
    setLoading(true)
    e.preventDefault()
    if(auth){
      localStorage.setItem('auth' , true)
    }
    setUser(true)
    setLoading(false)
  }
  return (
    <>
      {
        isLoading ? <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> : <form className='w-50 m-auto mt-5 bg-linght' onSubmit={changeUser}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setAuth(e.target.value)}/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      }
    </>
  )
}
