import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { signOut } from "../../../actions/signin";

import styles from "./styles";

class Header extends PureComponent {
  render() {
    const {
      signin: { status },
      signOut
    } = this.props;
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.logo)}>
          <a href="/">todoList</a>
        </div>
        <div className={css(styles.auth)}>
          <Link to="/signin">
            {!status && <button className={css(styles.link)}>signin</button>}
          </Link>
          {status && (
            <button className={css(styles.link)} onClick={() => signOut()}>
              signout
            </button>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({ signin: state.signin });
const mapDispatchToProps = { signOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
