// Packages
import Head from 'next/head'
import NProgress from 'nprogress'
import React from 'react'
import Router from 'next/router'

// Setting Spinner
NProgress.configure({showSpinner: false})
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends React.Component {
  render() {
    return (
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Admin panel for ▲ now"/>

        <title>admin.now</title>
        <link rel="shortcut icon" href="https://cdn.zeit.co/favicon/favicon.ico"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans"/>
        <link rel="stylesheet" href="/static/css/main.css"/>
        <link rel="stylesheet" href="/static/css/nprogress.css"/>

        <script src="https://use.fontawesome.com/c1b59ee6ed.js"/>
      </Head>
    )
  }
}

export default Layout
