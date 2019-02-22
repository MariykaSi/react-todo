import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import Input from "../../Atoms/Input";
import CheckBox from "../../Atoms/CheckBox";
import Button from "../../Atoms/Button";

export const EDIT_FORM = "editForm";

const formatCheckbox = value => {
  return !!value;
};

class EditFormComponent extends Component {
  render() {
    const { handleSubmit, pristine, submitting, edit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={css(styles.form)}>
        <div className={css(styles.row)}>
          <Field
            name="status"
            type="checkbox"
            component={CheckBox}
            readOnly={edit}
            format={formatCheckbox}
          />
        </div>
        <div className={css(styles.row)}>
          <Field
            name="text"
            type="text"
            component={Input}
            title="text"
            readOnly={edit}
          />
        </div>

        <div className={css(styles.button)}>
          <Button type="submit" name="edit" disabled={pristine || submitting} />
        </div>
      </form>
    );
  }
}

const ConnectedEditForm = reduxForm({
  form: EDIT_FORM
})(EditFormComponent);

export const EditForm = ConnectedEditForm;
