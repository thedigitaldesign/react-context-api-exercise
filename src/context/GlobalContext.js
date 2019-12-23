import React, { Component } from 'react'

// Packages

// Utils
import axios from '../utils/API/axios-uiface-api'

// Context
import Context from './Context'

export default class GlobalContext extends Component {
  state = {
    avatars: [{}],
  }

  componentDidMount() {
    this.getUIFaces()
  }

  getUIFaces = () => {
    axios
      .get('', {
        params: {
          limit: 6,
          random: 'random',
        },
      })
      .then(response => {
        return this.setState({
          avatars: response.data,
        })
      })
  }

  render() {
    const provider = {
      avatars: this.state.avatars,
    }

    return (
      <Context.Provider value={provider}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
