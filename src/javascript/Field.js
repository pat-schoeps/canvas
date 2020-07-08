import React, { Component } from 'react';

class Field extends Component {

  render() {
    let {
      field,
      value,
    } = this.props;

    return (
      <div 
        className="Field"
      >
        <label>{field}:</label>
        <input value={(value ? value : "")} onChange={(e) => this.props.onUpdate(field, e.target.value)} type="text" name={`colors[${field}]`} id={`colors_${field}`} />

      </div>
    );
  }

}

export default Field;
