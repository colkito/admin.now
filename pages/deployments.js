// Packages
import cookies from 'next-cookies'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import timeago from 'timeago.js'

// Ours
import Header from '../components/Header'
import Layout from '../components/Layout'
import nowClient from '../helpers/now'

class Deployments extends React.Component {
  static async getInitialProps(ctx) {
    const {token} = cookies(ctx)

    if (!token) {
      Router.push('/login')
    }

    const now = nowClient(token)
    const res = await now.getDeployments()

    return {data: res.data}
  }

  render() {
    const deployments = this.props.data.deployments

    return (
      <Layout title="Deployments">
        <Header/>

        <div id="deployments">
          <div className="container">
            <h3>Deployments ({deployments.length})</h3>
            <hr/>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>URL</th>
                  <th>Type</th>
                  <th>State</th>
                  <th>Created At</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                {deployments.map(deployment => {
                  return (
                    <tr key={deployment.uid}>
                      <td>{deployment.name}</td>
                      <td>
                        <Link href={'https://' + deployment.url}>
                          <a target="_blank" rel="noopener noreferrer">{deployment.url}</a>
                        </Link>
                      </td>
                      <td>{deployment.type}</td>
                      <td>
                        <i className={`fa fa-circle${(deployment.state === 'READY') ? ' deploy-ready' : '-o deploy-frozen'}`} title={deployment.state}/>
                      </td>
                      <td>
                        <span>{timeago().format(deployment.created)}</span>
                      </td>
                      <td>
                        ...
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    )
  }
}

Deployments.propTypes = {
  data: PropTypes.object.isRequired
}

export default Deployments
