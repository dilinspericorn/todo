import React, { Component } from 'react';

export class FormSubmit extends Component {
  state = {
    input: '',
  };
  getInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.getNoteInput(this.state.input);
    this.setState({
      input: '',
    });
    this.props.getBtnAdd(false);
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="container mt-5 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add Notes"
            onChange={this.getInput}
            value={this.state.input}
          />
        </div>
      </form>
    );
  }
}

export default FormSubmit;
