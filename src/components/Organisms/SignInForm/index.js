import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import { required } from "../../../utils/validation";

export const SIGN_IN_FORM = "signInForm";

class SignInFormComponent extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className={css(styles.form)}>
        <div className={css(styles.row)}>
          <Field
            name="admin"
            type="text"
            component={Input}
            title="admin"
            validate={[required]}
            label={"Login"}
          />
        </div>
        <div className={css(styles.row)}>
          <Field
            name="password"
            type="password"
            component={Input}
            validate={[required]}
            label={"Password"}
          />
        </div>

        <div className={css(styles.button)}>
          <Button
            type="submit"
            name="SignIn"
            disabled={pristine || submitting}
          />
        </div>
      </form>
    );
  }
}

const ConnectedSignInForm = reduxForm({
  form: SIGN_IN_FORM
})(SignInFormComponent);

export const SignInForm = ConnectedSignInForm;
