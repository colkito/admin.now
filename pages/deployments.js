// Packages
import cookies from 'next-cookies'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import timeago from 'timeago.js'
import {Dropdown, MenuItem} from 'react-bootstrap'
import Confirm from 'react-confirm-bootstrap'

// Ours
import Header from '../components/Header'
import Layout from '../components/Layout'
import nowClient from '../helpers/now'

let now

class ConfirmAction extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  async handleDelete() {
    console.log(this.props.uid, this.props.url)
    console.log('>>>', now)
  }

  render() {
    return (
      <Confirm
        onConfirm={this.handleDelete}
        body={`Are you sure you want to delete ${this.props.url}?`}
        confirmText="Confirm Delete"
        title="Deleting Deployment"
        >
        <MenuItem eventKey="1">Delete</MenuItem>
      </Confirm>
    )
  }
}

ConfirmAction.propTypes = {
  url: PropTypes.string.isRequired
}

class Deployments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static async getInitialProps(ctx) {
    const {token} = cookies(ctx)

    if (!token) {
      Router.push('/login')
    }

    now = nowClient(token)
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
                      <td>
                        <img src={`/static/img/deploy-type-${deployment.type}.svg`} className="deploy-type" title={deployment.type}/>
                      </td>
                      <td>
                        <i className={`fa fa-circle${(deployment.state === 'READY') ? ' deploy-state-ready' : '-o deploy-state-frozen'}`} title={deployment.state}/>
                      </td>
                      <td>
                        <span>{timeago().format(deployment.created)}</span>
                      </td>
                      <td>
                        <Dropdown key={deployment.uid} bsSize="xsmall" pullRight id={deployment.uid}>
                          <Dropdown.Toggle>
                            <i className="fa fa-cog"/>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <ConfirmAction uid={deployment.uid} url={deployment.url}/>
                          </Dropdown.Menu>
                        </Dropdown>
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
