import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

class Checkbox extends PureComponent {
  render() {
    const { input, id, readOnly } = this.props;
    return (
      <span>
        <input type="checkbox" disabled={readOnly} id={id} {...input} />
      </span>
    );
  }
}

Checkbox.defaultProps = {
  id: null,
  readOnly: false
};

Checkbox.propTypes = {
  id: PropTypes.string,
  readOnly: PropTypes.bool
};

export default Checkbox;
