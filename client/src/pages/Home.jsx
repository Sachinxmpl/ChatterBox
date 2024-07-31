import React from 'react'
import AppLayout from "../components/AppLayout/AppLayout"

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a basic React functional component.</p>
    </div>
  )
}

export default AppLayout()(Home)
