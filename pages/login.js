// Packages
import Cookies from 'js-cookie'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import nowClient from '../helpers/now'

class Login extends React.Component {
  constructor() {
    super()

    const token = Cookies.get('token')

    if (token) {
      return Router.push('/deployments')
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      loading: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      loading: true
    })

    const thi = this
    const token = thi.refs.token.value
    const now = nowClient(token)

    // Try a request
    now.getDeployments()
    .then(() => {
      let cookieOpts

      if (process.env.NODE_ENV === 'production') {
        cookieOpts = {
          secure: true
        }
      }

      Cookies.set('token', token, cookieOpts)

      Router.push('/deployments')
    })
    .catch(err => {
      console.log('>> error:', err)
      this.setState({loading: false})
    })
  }

  render() {
    const {loading} = this.state

    return (
      <Layout title="Login">
        <div id="login">
          <div id="content-wrapper" className="container">
            <div id="login">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <h3 className="text-center">
                    ▲ admin
                  </h3>
                  <br/>
                  <form name="loginForm" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                      <input
                        ref={`token`}
                        className="form-control"
                        placeholder="API Token"
                        type="password"
                        autoComplete="off"
                        required
                        />
                      <span className="input-group-btn">
                        <button type="submit" className={`btn btn-default ${loading ? 'disabled' : ''}`}>
                          <i className={`fa fa-${loading ? 'refresh fa-spin' : 'chevron-right'}`}/>
                        </button>
                      </span>
                    </div>
                    <p>
                      <small className="pull-right">
                        <Link href="https://zeit.co/account/tokens">
                          <a target="_blank" rel="noopener noreferrer">get a token</a>
                        </Link>
                      </small>
                      <br/>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </Layout>
    )
  }
}

export default Login
