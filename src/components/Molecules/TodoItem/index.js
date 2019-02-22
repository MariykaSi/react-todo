import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import { EditForm } from "../../Organisms/EditForm";

import styles from "./styles";

class TodoItem extends PureComponent {
  render() {
    const { item, edit, editTask } = this.props;
    return (
      <div className={css(styles.item)}>
        <img src={item.image_path} />
        <EditForm
          edit={edit}
          form={`${item.id}`}
          initialValues={item}
          onSubmit={editTask}
        />
        <p>email: {item.email}</p>
      </div>
    );
  }
}

TodoItem.defaultProps = {
  edit: null,
  editTask: null
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  edit: PropTypes.bool,
  editTask: PropTypes.func
};

export default TodoItem;
