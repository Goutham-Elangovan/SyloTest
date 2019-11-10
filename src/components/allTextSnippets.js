import React, { Component } from "react";
import { connect } from "react-redux";

import { removeText, editText } from "../actions/actions";

class AllTextSnippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: this.props.texts,
      searchParam: "",
      files: this.props.files
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(getAllFiles());
  }

  componentDidUpdate(prevProps) {
    if (this.props.texts && this.props.texts !== prevProps.texts) {
      this.setState({
        texts: this.props.texts
      });
    }
    if (this.props.files && this.props.files !== prevProps.files) {
      this.setState({
        files: Object.keys(this.props.files.Keys)
      });
    }
  }

  removeText = index => {
    this.props.removeText(index);
  };

  editText = (text, index) => {
    this.props.editText(text, index);
  };

  handleFilter = e => {
    this.setState({
      searchParam: e.target.value
    });
  };

  render() {
    const textsItems = this.state.texts
      .filter(item => item.content.includes(this.state.searchParam))
      .map((text, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{index + 1})</span>
          <span>{text.content}</span>
          <span>{text.lastUpdated}</span>
          <button onClick={() => this.editText(text.content, index)}>
            Edit
          </button>
          <button onClick={() => this.removeText(index)}>Delete</button>
        </li>
      ));

    const files = this.state.files.map((file, index) => (
      <li
        key={index}
        className="list-group-item d-flex justify-content-between"
      >
        <span>{index + 1})</span>
        <span>{file}</span>
        <button onClick={() => this.editText(file, index)}>Edit</button>
        <button onClick={() => this.removeText(index)}>Delete</button>
      </li>
    ));

    return (
      <div className="col-xl-12 mt-5">
        <div className="d-flex justify-content-between mb-5">
          <h3>All files</h3>
          <input
            type="text"
            className="p-2"
            placeholder="search"
            onChange={this.handleFilter}
          />
        </div>

        <div className="d-flex flex-column">
          <ul className="list-group">{files}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    texts: state.texts,
    files: state.files
  };
};

const mapDispatchToProprs = {
  removeText: removeText,
  editText: editText
};

// AllTextSnippets.propTypes = {
//     dispatch: PropTypes.func.isRequired,
// }

export default connect(
  mapStateToProps,
  mapDispatchToProprs
)(AllTextSnippets);
