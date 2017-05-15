
// Packages
import React, {Component} from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'
import nowClient from '../helpers/now'

class Login extends Component {
  constructor (props) {
    super(props)

    this.submitHandler = this.submitHandler.bind(this)
    this.state = {
      loading: false
    }
  }

  submitHandler (e) {
    e.preventDefault()

    this.setState({loading:true})

    const token = this.refs.token.value
    const now = nowClient(token)

    now.getDeployments()
    .then(() => {
      document.cookie = `token=${token}`
      return Router.push('/deployments')
    })
    .catch(err => {
      this.setState({loading:false})
    })
  }

  render () {
    const {loading} = this.state

    return (
      <div>
        <Layout title="Login" />

        <div id="login">
          <div id="content-wrapper" className="container">
            <div id="login">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <h3 className="text-center">
                    ▲ admin
                  </h3>
                  <br />
                  <form name="loginForm" onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <input className="form-control" placeholder="Zeit Token" ref="token" type="password" autoComplete="off" autoFocus required />
                    </div>
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
