import React, { Component } from 'react';
import  styled  from 'styled-components';

const Background = styled.section`
  background: ${props => props.colors.background};
`;

const Right = styled.section`
  background: ${props => props.colors.primary};
`;

const Bottom = styled.section`
  background: ${props => props.colors.secondary};
`;

const Left = styled.section`
  background: ${props => props.colors.tertiary};
`;

const Middle = styled.section`
  background: ${props => props.colors.background};
`;

class Board extends Component {

  render() {
    let {
      colors
    } = this.props;

    console.log(colors, "colors")

    return (
      <div className="Board">
        <Background colors={colors} className="Background">
          <Right colors={colors} className="Right" />
          <Bottom colors={colors} className="Bottom" />
          <Left colors={colors} className="Left" />

          <Middle colors={colors} className="Middle" />

        </Background>
      </div>
    )
  }

}

export default Board;
