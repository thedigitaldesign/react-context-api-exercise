import React, { Component } from 'react'

// Components
import Team from '../../components/Team/Team'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="column _60">
            <Team />
          </div>
          <div className="column _40 padding-right-40 mobile-padding-x-30">
            <h1>Our Story</h1>

            <p>
              You're going to be an interesting companion, Mr. Data. I'll alert
              the crew. I suggest you drop it, Mr. Data. The Federation's gone;
              the Borg is everywhere! Yes, absolutely, I do indeed concur,
              wholeheartedly! Fear is the true enemy, the only enemy. Some days
              you get the bear, and some days the bear gets you. When has
              justice ever been as simple as a rule book?
            </p>

            <p>
              Captain, why are we out here chasing comets? What? We're not at
              all alike! This is not about revenge. This is about justice. Mr.
              Worf, you do remember how to fire phasers? jazz.
            </p>
          </div>
        </div>
      </>
    )
  }
}
