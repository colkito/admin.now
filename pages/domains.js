// Packages
import cookies from 'next-cookies'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import timeago from 'timeago.js'

// Ours
import Header from '../components/Header'
import Layout from '../components/Layout'
import nowClient from '../helpers/now'

class Domains extends React.Component {
  static async getInitialProps(ctx) {
    const {token} = cookies(ctx)

    if (!token) {
      Router.push('/login')
    }

    const now = nowClient(token)
    const res = await now.getDomains()

    return {data: res.data}
  }

  render() {
    const domains = this.props.data.domains

    return (
      <Layout title="Domains">
        <Header/>

        <div id="domains">
          <div className="container">
            <h3>Domains ({domains.length})</h3>
            <hr/>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Is External</th>
                  <th>Verified</th>
                  <th>Created At</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                {domains.map(domain => {
                  return (
                    <tr key={domain.uid}>
                      <td>{domain.name}</td>
                      <td>
                        <i className={`fa fa-circle${domain.isExternal ? ' domain-external' : '-o domain-no-external'}`}/>
                      </td>
                      <td>
                        <i className={`fa fa-circle${domain.verified ? ' domain-verified' : '-o domain-no-verified'}`}/>
                      </td>
                      <td>
                        <span>{timeago().format(domain.created)}</span>
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

Domains.propTypes = {
  data: PropTypes.object.isRequired
}

export default Domains
