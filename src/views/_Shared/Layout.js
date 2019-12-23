import React, { Component } from 'react'

// Styles
import './Layout.css'

export default class Layout extends Component {
  render() {
    return (
      <>
        <header className="header">
          Joshua Christensen - UI Engineering Technical Exercise
        </header>
        <main className="app">
          {this.props.children}
        </main>
      </>
    )
  }
}
