import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../../store'
import Button from '../../global/Button';
import Input from '../../global/Input';
import BottleDescription from './BottleDescription';
import CreditCards from './CreditCards';
import './css/payment-content-area.css';

const nextUrl = '/checkout/error';

let cc = '',
    cvv = '',
    expireMonth = '',
    expireYear = '';

class DeliveryContentArea extends Component {

  months() {
    return <select name="month" className="half" onChange={(e) => this.onExpireMonthChange(e.target.value)}>
      <option>MM</option>
      {[...Array(12)].map((x, i) =>
        <option key={i}>{i+1 < 10 ? '0' + (i+1) : (i+1)}</option>
      )}
    </select>;
  }

  years() {
    return <select name="year" className="half" onChange={(e) => this.onExpireYearChange(e.target.value)}>
      <option>YYYY</option>
      {[...Array(10)].map((x, i) =>
        <option key={i}>{new Date().getFullYear() + i}</option>
      )}
    </select>;
  }

  disabled() {
    return false;
  }

  onCCChange(value) {
    cc = value;
  }

  onCVVChange(value) {
    cvv = value;
  }

  onExpireMonthChange(value) {
    expireMonth = value;
  }

  onExpireYearChange(value) {
    expireYear = value;
  }

  valid() {
    return cc && cvv && expireMonth && expireYear;
  }

  submit() {
    if (this.valid()) {
      this.props.next();
    }
  }

  updateProgressBar() {
    store.dispatch({
      type: 'UPDATE_PROGRESS',
      step: 'payment',
      stepTitle: 'Finish your order'
    });
  }

  componentWillMount() {
    this.updateProgressBar();
  }

  render() {

    return (
      <section className="content-area container delivery-container">
        <h2 className="checkout question">Order Summary</h2>

        <div className="description-container w-clearfix">
          <img src="/images/bottle-icon.gif" className="bottle" alt="Your Bottle" />

          <div className="bottle-container">
            <BottleDescription title="Hair type" descriptors={this.props.moisture} />
            <BottleDescription title="Boosts" descriptors={this.props.boosts} />
            <BottleDescription title="Fragrance" descriptors={this.props.fragrance} />
          </div>
        </div>

        <div className="total-container">
          <p>Total (including tax and shipping)</p>
          <h4 className="total">$40</h4>
        </div>

        <CreditCards />

        <Input type="tel" placeholder="Card number" onChange={this.onCCChange} />
        <Input type="tel" placeholder="CVV" onChange={this.onCVVChange}/>
        {this.months()}
        {this.years()}
        <Button text="Checkout"
                disabled={this.disabled()}
                submit={this.submit.bind(this)} />
      </section>
    );
  }
}

let next = () => ({
  type: 'NEXT_STEP',
  url: nextUrl
})

let mapStateToProps = state => ({
  moisture: state.user.moisture,
  boosts: state.user.boosts,
  fragrance: state.user.fragrance
})

let mapDispatchToProps = dispatch => ({
  next: () => dispatch(next())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContentArea);
