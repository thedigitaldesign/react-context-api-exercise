import React from 'react'

// Packages
import { Route, Switch } from 'react-router-dom'

// Components
import Home from '../../views/Home/Home'
import Avatar from '../../views/Avatar/Avatar'


const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/avatar/:id" exact component={Avatar} />
      </Switch>
    </>
  )
}

export default Routes
