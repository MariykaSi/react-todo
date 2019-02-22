import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";

import Header from "../../components/Organisms/Header";
import Footer from "../../components/Organisms/Footer";
import TodoItem from "../../components/Molecules/TodoItem";
import Loading from "../../components/Atoms/Loading";
import Select from "../../components/Atoms/Select";
import { AddTaskForm } from "../../components/Organisms/AddTaskForm";
import Pagination from "../../components/Molecules/Pagination";

import { getTaskStart, postTaskStart, editTaskStart } from "../../actions/task";

import styles from "./styles";

const taskPerPage = 3;
const sortFieldOptions = ["id", "username", "email", "status"];
const sortDirectionOptions = ["asc", "desc"];

class Home extends Component {
  state = {
    sortDirection: sortDirectionOptions[0],
    sortField: sortFieldOptions[0],
    page: 1
  };

  componentDidMount() {
    const { sortField, sortDirection } = this.state;
    this.props.getTaskStart(1, sortField, sortDirection);
  }

  paginationClick = page => {
    const pageCurrent = page.selected + 1;
    const { sortDirection, sortField } = this.state;
    this.props.getTaskStart(pageCurrent, sortField, sortDirection);
    this.setState({
      page: pageCurrent
    });
  };

  changeSort = (fieldVal, fieldDirection) => {
    const { page } = this.state;
    this.props.getTaskStart(page, fieldVal, fieldDirection);
    this.setState({
      sortField: fieldVal,
      sortDirection: fieldDirection
    });
  };

  postTask = values => {
    const { page, sortField, sortDirection } = this.state;
    this.props.postTaskStart(values, page, sortField, sortDirection);
  };

  editTask = values => {
    const { id, status, text } = values;
    const formatStatus = status ? 10 : 0;
    this.props.editTaskStart(id, formatStatus, text);
  };

  render() {
    const {
      global: { loading },
      task: { list, totalTaskCount },
      signin: { status }
    } = this.props;

    const { sortDirection, sortField } = this.state;
    const pageCount = +totalTaskCount / taskPerPage;

    return (
      <div className={css(styles.page)}>
        {loading && (
          <section className={css(styles.loading)}>
            <Loading />
          </section>
        )}
        <Header />
        <div className={css(styles.main)}>
          <div className={css(styles.topRow)}>
            <AddTaskForm onSubmit={this.postTask} />
            Sort Field:
            <Select
              value={sortField}
              options={sortFieldOptions}
              onChange={val => this.changeSort(val, sortDirection)}
            />
            Sort Direction:
            <Select
              value={sortDirection}
              options={sortDirectionOptions}
              onChange={val => this.changeSort(sortField, val)}
            />
          </div>
          <div className={css(styles.container)}>
            <div className={css(styles.content)}>
              {!!list[0] &&
                list.map(item => (
                  <TodoItem
                    edit={!status}
                    editTask={this.editTask}
                    item={item}
                    key={item.id}
                  />
                ))}
            </div>
            <Pagination
              pageCount={pageCount}
              onPageChange={this.paginationClick}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  getTaskStart,
  postTaskStart,
  editTaskStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
