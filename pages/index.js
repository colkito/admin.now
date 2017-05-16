// Packages
import cookies from 'next-cookies'
import React from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'

class Index extends React.Component {
  getInitialProps(ctx) {
    const {token} = cookies(ctx)

    if (token) {
      Router.push('/deployments')
    }
  }

  render() {
    return (
      <div>
        <Layout/>

        <div id="home">
          <div className="container">
            <h1 className="title">▲ admin</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
