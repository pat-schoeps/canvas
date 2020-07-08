import React, { Component } from 'react';
import Field from '../javascript/Field';


class Controls extends Component {

  render() {
    return (
      <div 
        className="Controls"
      >
        {this.renderFields()}
      </div>
    );
  }

  renderFields = () => {
    let fields = ["primary", "secondary", "tertiary", "background"];
    let {
      colors,
    } = this.props;

    return fields.map((field, i) => {
      return (
        <Field
          onUpdate={this.props.onUpdateColor}
          field={field}
          value={colors[field]}
          key={i}
        />
      )
    });
  }

}

export default Controls;
