// Packages
import Link from 'next/link'
import React from 'react'

export default () => (
  <footer>
    <small className="text-muted pull-left">
      built by&nbsp;
      <Link href="https://github.com/colkito">
        <a>
          colkito
        </a>
      </Link>
    </small>

    <small className="text-muted pull-right">
      powered by&nbsp;
      <Link href="https://now.sh">
        <a>
          ▲ now
        </a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="https://github.com/colkito/now-admin">
        <a>
          source
        </a>
      </Link>
    </small>
  </footer>
)
