import React, { PureComponent, Fragment } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Input extends PureComponent {
  render() {
    const {
      input,
      type,
      label,
      meta: { touched, error },
      readOnly
    } = this.props;
    return (
      <div>
        {label}
        <input
          {...input}
          type={type}
          disabled={readOnly}
          className={css(styles.input)}
        />
        {touched &&
          (error && <span className={css(styles.error)}>{error}</span>)}
      </div>
    );
  }
}

Input.defaultProps = {
  type: null,
  readOnly: false,
  label: null
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  readOnly: PropTypes.bool
};

export default Input;
