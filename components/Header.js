// Packages
import Cookies from 'js-cookie'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()

    Cookies.remove('token')
    Router.push('/login')
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">▲ admin</a>
          </div>

          <ul className="nav navbar-nav">
            <li>
              <Link href="/deployments">
                <a>Deployments</a>
              </Link>
            </li>
            <li>
              <Link href="/domains">
                <a>Domains</a>
              </Link>
            </li>
          </ul>

          <ul className="nav navbar-nav pull-right">
            <li>
              <a href="#" onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
