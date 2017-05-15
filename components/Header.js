// Packages
import Link from 'next/link'

export default props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">▲ admin</a>
      </div>

      <ul className="nav navbar-nav">
        <li>
          <Link href="/deployments">
            <a>Deployments</a>
          </Link>
        </li>
        <li>
          <Link href="/domains">
            <a>Domains</a>
          </Link>
        </li>
      </ul>

      <ul className="nav navbar-nav pull-right">
        <li>
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
