import React, { Component } from 'react'

// Styles
import './Avatar.css'

export default class Avatar extends Component {
  render() {
    const { data } = this.props

    return (
      <div className="avatar-card">
        <div className="card-photo">
          <img src={data.photo} alt={data.name} />
        </div>
        <span>{data.name}</span>
      </div>
    )
  }
}
