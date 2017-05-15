// Packages
import {Component} from 'react'
import Cookies from 'next-cookies'
import Link from 'next/link'
import timeago from 'timeago.js'

// Ours
import Header from '../components/Header'
import Layout from '../components/Layout'
import nowClient from '../helpers/now'

class Deployments extends Component {
  static async getInitialProps (ctx) {
    const {token} = Cookies(ctx)

    const now = nowClient(token)
    const res = await now.getDeployments()

    return {data: res.data}
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render (props) {
    return (
      <div>
        <Layout title="Deployments" />
        <Header />

        <div id="deployments">
          <div className="container">
            <h3>Deployments ({this.props.data.deployments.length})</h3>
            <hr />

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>URL</th>
                  <th>State</th>
                  <th>Created At</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.deployments.map((deployment, i) => {
                  return (
                    <tr key={i}>
                      <td>{deployment.name}</td>
                      <td>
                        <Link href={'https://' + deployment.url}>
                          <a target="_blank">{deployment.url}</a>
                        </Link>
                      </td>
                      <td>
                        <i className={`fa fa-circle${(deployment.state === 'READY') ? ' deploy-ready' : '-o deploy-frozen'}`} title={deployment.state}></i>
                      </td>
                      <td>
                        <span>{timeago().format(deployment.created)}</span>
                      </td>
                      <td>...</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Deployments
