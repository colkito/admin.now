// Packages
import Cookies from 'js-cookie'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import React from 'react'
import Router from 'next/router'

// Setting Spinner
NProgress.configure({showSpinner: false})
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/nprogress.css"/>
        </Head>

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
      </div>
    )
  }
}

export default Header
