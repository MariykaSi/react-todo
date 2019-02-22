import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";
import { Redirect } from "react-router-dom";

import Header from "../../components/Organisms/Header";
import Footer from "../../components/Organisms/Footer";
import { SignInForm } from "../../components/Organisms/SignInForm";
import { signIn } from "../../actions/signin";

import styles from "./styles";

class Signin extends Component {
  state = {
    signinError: false
  };

  signIn = values => {
    values.admin === "admin" && values.password === "123"
      ? this.props.signIn()
      : this.setState({
          signinError: true
        });
  };
  render() {
    const {
      signin: { status }
    } = this.props;
    const { signinError } = this.state;
    return (
      <div className={css(styles.page)}>
        {status && <Redirect to="/" />}
        <Header />
        <div className={css(styles.main)}>
          <SignInForm onSubmit={this.signIn} />
          {signinError && (
            <div className={css(styles.signinError)}>
              Opps...wrong login or password
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ signin: state.signin });
const mapDispatchToProps = { signIn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
