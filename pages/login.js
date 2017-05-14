
// Packages
import React, {Component} from 'react'

// Ours
import Layout from '../components/layout'
import nowClient from '../helpers/now'

class Login extends Component {
  constructor (props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }

  async submitHandler (e) {
    e.preventDefault()

    const token = this.refs.token.value
    const now = nowClient(token)
    const deployment = await now.getDeployments()

    console.log('deployments: ', deployments)
  }

  render () {
    return (
      <div>
        <Layout title="Login" />

        <div id="login">
          <div id="content-wrapper" className="container">
            <div id="login">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title text-center">
                        ▲ admin
                      </h3>
                    </div>
                    <div className="panel-body">
                      <form name="loginForm" onSubmit={this.submitHandler}>
                        <div className="form-group">
                          <input className="form-control" placeholder="Zeit Token" ref="token" type="password" autoComplete="off" autoFocus required />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Login</button>
                      </form>
                    </div>
                  </div>
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
