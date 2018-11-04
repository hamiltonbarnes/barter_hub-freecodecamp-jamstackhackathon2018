import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div>
      {/*<span>{content.message}</span> */}

      <nav className="navbar">
        <Link className="navbar-brand" to="/">BaterHub</Link>
        <ul className="navbar-nav">
        <li className="nav-item">

        <Link to="/">Home</Link>
        {` `}         </li>
        <li className="nav-item">

        <Link to="/profile">Profile</Link>
<<<<<<< HEAD
        {` `}</li>
        <li className="nav-item">

=======
        {` `}
>>>>>>> 868e405fc713125ce85d5f30b749a74deef140e0
        <Link to="/do-barter">Do barter</Link>
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/login`))
            }}

          >

            Logout
          </a>
        ) : null}
        </li>
        </ul>
      </nav>
    </div>
  )
}