import React from 'react'

// Packages
import { Route } from 'react-router-dom'

// Components
import Home from '../../views/Home/Home'


const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  )
}

export default Routes
