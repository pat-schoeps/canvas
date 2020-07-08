import React, { Component } from 'react';
import Controls from '../javascript/Controls';
import Board from '../javascript/Board';

class Workspace extends Component {

  static defaultProps = {
    colors: {
      background: "#7C7C7C",
      primary: "#B8336A",
      secondary: "#F8FFF4",
      tertiary: "#383D3B",
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
    };
  }

  render() {
    let {
      colors,
    } = this.state;

    return (
      <div 
        className="Workspace"
      >
        <div className="inner-container">

          <Controls
            colors={colors}
            onUpdateColor={this.handleUpdateColor}
          />

          <Board
            colors={colors}
          />
        </div>
      </div>
    );
  }

  handleUpdateColor = (field, val) => {
    let { colors } = this.state;

    colors[field] = val;
    this.setState({colors: colors});
  }
}

export default Workspace;
