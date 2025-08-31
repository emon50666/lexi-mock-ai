import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

const RootLayout = ({children} : {children : ReactNode}) => {
  return (
    <div>
     <Navbar/>
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

export default RootLayout
