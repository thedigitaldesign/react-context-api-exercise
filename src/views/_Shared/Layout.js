import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <>
        <header>
          This is my header bar
        </header>
        <main>
          {this.props.children}
        </main>
      </>
    )
  }
}
