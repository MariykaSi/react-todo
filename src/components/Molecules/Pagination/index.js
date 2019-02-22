import ReactPaginate from "react-paginate";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class Pagination extends PureComponent {
  render() {
    const { pageCount, onPageChange } = this.props;

    return pageCount >= 1 ? (
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName="paginationWrapper"
        pageClassName="paginationLink"
        previousLabel="previous"
        nextLabel="next"
        previousClassName="arrowLeft"
        nextClassName="arrowRight"
        onPageChange={onPageChange}
      />
    ) : null;
  }
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired
};

export default Pagination;
