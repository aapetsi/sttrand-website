import React from 'react'
import Head from 'next/head'

const Header = (props) => {
  const { title } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content='social commerce, group buying' />
      </Head>
    </div>
  )
}

export default Header
