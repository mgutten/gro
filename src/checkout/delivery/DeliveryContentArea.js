import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../../store'
import Button from '../../global/Button';
import Input from '../../global/Input';

const nextUrl = '/checkout/payment';

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

class DeliveryContentArea extends Component {

  states() {
    return <select className="half"
                   onChange={(event) => this.props.onStateChange(event.target.value)}>
      <option>State</option>
      {states.map(function(value,i) {
        return <option value={value} key={value}>{value}</option>
      })}
    </select>;
  }

  disabled() {
    return false;
  }

  updateProgressBar() {
    store.dispatch({
      type: 'UPDATE_PROGRESS',
      step: 'delivery',
      stepTitle: 'Where should we send it'
    });
  }

  componentWillMount() {
    this.updateProgressBar();
  }

  render() {

    return (
      <section className="content-area container delivery-container">
        <h2 className="checkout question">Shipping Address</h2>
        <Input type="text"
               onChange={this.props.onNameChange}
               default={this.props.name}
               placeholder="Full Name" />
        <Input type="text"
               onChange={this.props.onAddressChange}
               default={this.props.address}
               placeholder="Street Address" />
        <Input type="tel"
               onChange={this.props.onZipcodeChange}
               default={this.props.zipcode}
               placeholder="Zipcode" />
        <Input type="text"
               onChange={this.props.onCityChange}
               default={this.props.city}
               placeholder="City"
               className="half" />
        {this.states()}
        <Button text="Continue"
                disabled={this.disabled()}
                submit={this.props.next} />
      </section>
    );
  }
}

let next = () => ({
  type: 'NEXT_STEP',
  url: nextUrl
})

let valueChange = (key, value) => ({
  type: 'SET_USER',
  key: key,
  value: value
})

let onNameChange = (value) => valueChange('name', value);
let onAddressChange = (value) => valueChange('address', value);
let onZipcodeChange = (value) => valueChange('zipcode', value);
let onCityChange = (value) => valueChange('city', value);
let onStateChange = (value) => valueChange('state', value);

let mapStateToProps = state => ({
  name: state.user.name,
  address: state.user.address,
  zipcode: state.user.zipcode,
  city: state.user.city,
  state: state.user.state
})

let mapDispatchToProps = dispatch => ({
  next: () => dispatch(next()),
  onNameChange: (value) => dispatch(onNameChange(value)),
  onAddressChange: (value) => dispatch(onAddressChange(value)),
  onZipcodeChange: (value) => dispatch(onZipcodeChange(value)),
  onCityChange: (value) => dispatch(onCityChange(value)),
  onStateChange: (value) => dispatch(onStateChange(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContentArea);
