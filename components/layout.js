// Packages
import Head from 'next/head'

export default props => (
  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Admin panel for ▲ now" />

    <title>{ props.title ? props.title + ' - admin.now' : 'admin.now'}</title>
    <link rel="shortcut icon" href="https://cdn.zeit.co/favicon/favicon.ico" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
    <link rel="stylesheet" href="/static/css/main.css" />

    <script src="https://use.fontawesome.com/c1b59ee6ed.js"></script>
  </Head>
)
