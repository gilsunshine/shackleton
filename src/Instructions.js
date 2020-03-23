import React from 'react'

class Instructions extends React.Component{

  constructor(){
    super()
    this.state = {
      show: true
    }
  }

  hideInstructions = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    return(
      <div onClick={this.hideInstructions}>
        {this.state.show ? <div style={divStyle}> <strong style={textStyle}>Welcome to Shackleton's Hut</strong>
        <p style={textStyle}>Use arrow keys to rotate view and to zoom. Click on the instructions to hide them.</p> </div>  : <div style={instructionDivStyle}><strong style={instructionTextStyle}>Instructions</strong></div>}
      </div>
    )
  }
}

export default Instructions

let textStyle = {
  color: "#555",
  fontFamily: "'Roboto Mono', monospace",
  fontSize: '0.8em'
}

let divStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  margin: "2%",
  padding: "1%",
  backgroundColor: '#eee',
  zIndex: 10,
  width: "15%"
}

let instructionTextStyle = {
  color: "#000",
  fontFamily: "'Roboto Mono', monospace",
  fontSize: '0.8em'
}

let instructionDivStyle = {
  display: "inline-block",
  position: "absolute",
  margin: "2%",
  padding: "1%",
  backgroundColor: '#555',
  zIndex: 10,
}
