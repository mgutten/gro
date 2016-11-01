import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Button from '../../global/Button';
import Input from '../../global/Input';
import './css/email-content-area.css';

const nextUrl = "/checkout/delivery";

class EmailContentArea extends Component {

  disabled() {
    return !this.props.email;
  }

  noThanksClassNames() {
    let classNames = 'no-thanks';

    if (!this.disabled())
      classNames += ' hidden';

    return classNames;
  }

  render() {

    const noThanksText = "No thanks, I don't want free shipping";

    return (
      <section className="content-area container">
        <h2 className="checkout question">Get FREE SHIPPING Instantly</h2>
        <h4>Add your email and get free shipping</h4>
        <Input type="email"
               onChange={this.props.onEmailChange}
               default={this.props.email}
               placeholder="Email" />
        <Link to={nextUrl}
              className={this.noThanksClassNames()}>
          {noThanksText}
        </Link>
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

let onEmailChange = function(value) {
  return {
    type: 'SET_USER',
    key: 'email',
    value: value
  }
}

let mapStateToProps = state => ({
  email: state.user.email
})

let mapDispatchToProps = dispatch => ({
  next: () => dispatch(next()),
  onEmailChange: (value) => {
    dispatch(onEmailChange(value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailContentArea);
