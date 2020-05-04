import React, { Component } from 'react'
import SequenceStep from './SequenceStep'

export class SequenceStepContainer extends Component {

  renderSequenceSteps = () => {
    let stepRow = []
    let stepsInRow = 16
    let i = 0 
    for (i=0; i<stepsInRow; i++) {
      stepRow.push(<SequenceStep key={i} />)
    }
    return stepRow
  }

  render() {
    // for adding additional sounds, need to refactor this into a function that returns a row
    return (
      <div id="sequenceStepRowContainer">
        <div id="sequenceStepRow1">
          {this.renderSequenceSteps()}
        </div>
        <div id="sequenceStepRow2">
          {this.renderSequenceSteps()}
        </div>
        <div id="sequenceStepRow3">
          {this.renderSequenceSteps()}
        </div>
        <div id="sequenceStepRow4">
          {this.renderSequenceSteps()}
        </div>
      </div>
    )
  }
}

export default SequenceStepContainer
