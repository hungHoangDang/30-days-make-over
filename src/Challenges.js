import React, { Component } from "react";
import ChallengeApi from "./api.js";
import { Container } from 'bloomer';
import ChallengesList from "./ChallengesList.js"

class challenges extends Component {
  constructor (props) {
    super (props);
    this.state = {isChallengeXVisible: false};
  }

  handleClick() {
    (e) => {
      e.preventDefault()
      this.setState(
       {isChallengeXVisible: true,
        ChallengeApi}
      )
    }
  }

  render() {
    return (
      <Container>
        <h1 className="challenges">Challenges</h1>
        <div className="list-wrapper">
          <div className="list-style">
            <Container>
              <ChallengesList ChallengeApi = {ChallengeApi}/>
            </Container>
          </div>
        </div>
      </Container>
    );
  }
}

export default challenges;
