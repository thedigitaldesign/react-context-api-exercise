import React, { Component } from 'react'

// Packages
import { BrowserRouter } from 'react-router-dom'

// Components
import AppRoutes from './utils/Routes/Routes'
import Layout from './views/_Shared/Layout'

// Providers
import GlobalContext from './context/GlobalContext'

export default class App extends Component {
  render() {
    return (
      <GlobalContext>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </GlobalContext>
    )
  }
}
