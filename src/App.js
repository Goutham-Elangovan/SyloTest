import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import "./App.css";
import PasteComponent from "./components/pasteComponent";
import AllTextSnippets from "./components/allTextSnippets";
import { getAllFiles } from "./actions/actions";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllFiles());
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav
            className="navbar navbar-dark bg-dark"
            style={{ justifyContent: "center" }}
          >
            <a className="navbar-brand" href="#"></a>
          </nav>
        </header>
        <main role="main" className="container">
          <div className="col-xl-12">
            <h1 style={{ marginTop: 40 }}>PASTE IT!</h1>
            <PasteComponent editText={this.props.editText} />

            <AllTextSnippets />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editText: state.editText
  };
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  null
)(App);
