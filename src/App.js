import React, { Component, createContext } from 'react'

// Styles
import './App.css'

// Packages
import { BrowserRouter } from 'react-router-dom'

// Components
import AppRoutes from './utils/Routes/Routes'
import Layout from './views/_Shared/Layout'

const Context = createContext()

class GlobalProvider extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    position: '',
    photo: '',
  }

  render() {
    const provider = {
      state: this.state,
      handleAvatarClick: () => this.setState({}),
    }

    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <GlobalProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </GlobalProvider>
      </BrowserRouter>
    )
  }
}
