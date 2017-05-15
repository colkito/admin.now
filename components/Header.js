// Packages
import {Component} from 'react'
import Router from 'next/router'
import Link from 'next/link'

class Header extends Component {
  constructor (props) {
    super(props)
    this.logoutHandler = this.logoutHandler.bind(this)
  }

  logoutHandler (e) {
    e.preventDefault()
    document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    return Router.push('/login')
  }

  render () {
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
              <a href="#" onClick={this.logoutHandler}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
