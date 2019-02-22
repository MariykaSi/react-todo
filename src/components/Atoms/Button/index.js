import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Button extends PureComponent {
  render() {
    const { type, name, disabled } = this.props;
    return (
      <button
        type={type}
        disabled={disabled}
        className={css(styles.button, disabled && styles.disabled)}
      >
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  name: null
};

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
