// Packages
import Cookies from 'js-cookie'
import React from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'
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
      Cookies.set('token', token, {
        domain: 'admin.now.sh',
        secure: true
      })

      return Router.push('/deployments')
    })
    .catch(err => {
      console.log('>> error:', err)
      this.setState({loading: false})
    })
  }

  render() {
    const {loading} = this.state

    return (
      <div>
        <Layout title="Login"/>

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
                    <input
                      ref={`token`}
                      className="form-control"
                      placeholder="Zeit Token"
                      type="password"
                      autoComplete="off"
                      autoFocus
                      required
                      />
                    <br/>
                    <button type="submit" className={`btn btn-now btn-block ${loading ? 'disabled' : ''}`}>
                      {loading ? 'loading...' : 'login'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
