import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'
import './login.css'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <div className="login-container">
          <div className="signin">
            <EyesforLogin />
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                navigate(`/404`)
              }}
            >
              <label>
                Username :
                <input
                  type="text"
                  id="name"
                  name="username"
                  placeholder="i'm a ninja"
                  onChange={this.handleUpdate}
                />
              </label>
              <label>
                Password :
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={this.handleUpdate}
                />
              </label>
              <input type="submit" id="sumbit" value="Log Into BarterHub" />
            </form>
          </div>
        </div>
      </>
    )
  }
}

const EyesforLogin = () => (
  <div class="anim">
    <div class="circle">
      <div class="eye">
        <div class="eyedot" />
      </div>
    </div>
    <div class="circle">
      <div class="eye">
        <div class="eyedot" />
      </div>
    </div>
  </div>
)

export default Login
