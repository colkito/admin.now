// Packages
import Cookies from 'js-cookie'
import Link from 'next/link'
import React from 'react'
import Router from 'next/router'

// Ours
import Layout from '../components/Layout'
import Footer from '../components/Footer'

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
      <Layout>
        <div id="home">
          <h1>▲ admin</h1>
          <br/>
          <p className="text-muted">
            a simple admin panel for your <u>now</u> account. <Link href="/login" prefetch><a>login</a></Link>
          </p>
        </div>

        <Footer/>
      </Layout>
    )
  }
}

export default Index
