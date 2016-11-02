import React, {Component} from 'react';
import './css/bottle-description.css';

class BottleDescription extends Component {

  render() {
    return (
      <div className="bottle-description-container">
        <h4>{this.props.title}:</h4>
        {this.props.descriptors.map((value) =>
          <p key={value}>+ {value}</p>
        )}
      </div>
    );
  }
}

export default BottleDescription;
