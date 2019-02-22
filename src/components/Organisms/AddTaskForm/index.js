import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { Field, reduxForm } from "redux-form";

import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import { required, email } from "../../../utils/validation";
import styles from "./styles";

export const ADD_TASK_FORM = "addTaskForm";

class AddTaskFormComponent extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className={css(styles.form)}>
        <div className={css(styles.row)}>
          <Field
            name="userName"
            type="text"
            component={Input}
            title="userName"
            validate={[required]}
            label="User name"
          />
        </div>
        <div className={css(styles.row)}>
          <Field
            name="email"
            type="email"
            component={Input}
            title="email"
            validate={[required, email]}
            label="Email"
          />
        </div>
        <div className={css(styles.row)}>
          <Field
            name="text"
            type="text"
            component={Input}
            title="text"
            validate={required}
            label="Text"
          />
        </div>
        <div className={css(styles.row)}>
          <Button
            type="submit"
            name="add task"
            disabled={pristine || submitting}
          />
        </div>
      </form>
    );
  }
}

const ConnectedAddTaskForm = reduxForm({
  form: ADD_TASK_FORM
})(AddTaskFormComponent);

export const AddTaskForm = ConnectedAddTaskForm;
