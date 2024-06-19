import React from 'react'
import Header from './Header'

function Layout({children}) {
  return (
    <div className=' bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <Header/>
      <main className=' h-screen'>{children}</main>
    </div>
  )
}

export default Layout
