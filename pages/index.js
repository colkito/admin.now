// Packages
import Cookies from 'js-cookie'
import React from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'

class Index extends React.Component {
  constructor() {
    super()

    const token = Cookies.get('token')

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
