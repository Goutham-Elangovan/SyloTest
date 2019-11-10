import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ipfs from "../ipfs";

import { addText, updateText, uploadFile } from "../actions/actions";

class PasteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSnippet: this.props.editText.content
        ? this.props.editText.content
        : "",
      editMode: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps) {
    if (this.props.editText && this.props.editText !== prevProps.editText) {
      this.setState({
        textSnippet: this.props.editText.content,
        editMode: true
      });
    }
  }

  handleSave = e => {
    e.preventDefault();

    let { textSnippet } = this.state;
    this.props.addText(textSnippet);
    const file = new Blob([textSnippet], { type: "text/plain" });
    console.log(file);

    // ipfs.add(Buffer.from(textSnippet), (error, result) => {
    //     console.log(result);
    //     if (error) {
    //         return
    //     }
    //     this.setState({ ipfsHash: result[0].hash })
    //     // this.simpleStorageInstance.set(result[0].hash, { from: this.state.account }).then((r) => {
    //     //     return this.setState({ ipfsHash: result[0].hash })
    //     //     console.log('ifpsHash', this.state.ipfsHash)
    //     // })
    // })

    const { dispatch } = this.props;
    dispatch(uploadFile(file));

    this.setState({ textSnippet: "" });
  };

  handleUpdate = e => {
    e.preventDefault();
    let { textSnippet } = this.state;
    let { id } = this.props.editText;
    this.props.updateText(textSnippet, id);
    this.setState({ textSnippet: "", editMode: false });
  };

  render() {
    return (
      <div
        className="child"
        style={{
          display: "flex",
          width: "550px",
          margin: "auto",
          flexDirection: "column"
        }}
      >
        <textarea
          style={{ height: 200, marginTop: 30 }}
          name="textSnippet"
          value={this.state.textSnippet}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <div className="text-right">
          <button
            onClick={this.state.editMode ? this.handleUpdate : this.handleSave}
          >
            {this.state.editMode ? "Update" : "Save"}
          </button>
        </div>
      </div>
    );
  }
}
PasteComponent.propTypes = {
  addText: PropTypes.func.isRequired,
  text: PropTypes.string,
  editText: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    addText: addText,
    updateText: updateText
  }
)(PasteComponent);
