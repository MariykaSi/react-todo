import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Select extends PureComponent {
  render() {
    const { sort, options, onChange } = this.props;
    return (
      <select
        className={css(styles.select)}
        value={sort}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(item => (
          <option value={item}>{item}</option>
        ))}
      </select>
    );
  }
}

Select.defaultProps = {
  onChange: null
};

Select.propTypes = {
  onChange: PropTypes.func,
  sort: PropTypes.string.isRequired
};

export default Select;
