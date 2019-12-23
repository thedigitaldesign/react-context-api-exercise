import React, { Component } from 'react'

// Components
import Avatar from '../Avatar/Avatar'

// Context
import Context from '../../context/Context'

export default class Team extends Component {
  render() {
    return (
      <>
        <h1 className="padding-left-40">Our Team</h1>
        <div className="row">
          <Context.Consumer>
            {context =>
              context.avatars.map((data, index) => {
                return (
                  <div key={index} className="column">
                    <Avatar data={data} />
                  </div>
                )
              })
            }
          </Context.Consumer>
        </div>
      </>
    )
  }
}
