import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

export class App extends Component {
  state = {
    input: [],
    btnAdd: false,
    checked: [],
    onBtnClick: null,
  };

  onBtnClickId = (id) => {
    this.setState({
      onBtnClick: id,
    });
  };

  getchecked = (value,selected) => {
    this.setState({
      checked: [...this.state.checked, { value: value ,selected:selected }],
    });
  };

  getBtnAdd = (e) => {
    this.setState({
      btnAdd: e,
    });
  };

  getNoteInput = (e) => {
    this.setState({
      input: [...this.state.input, e],
    });
  };

  render() {
    return (
      <div className="container main-card">
        <Header />
        <div>
          <Section
            getNoteInput={this.getNoteInput}
            btnAdd={this.state.btnAdd}
            input={this.state.input}
            getchecked={this.getchecked}
            checked={this.state.checked}
            onBtnClick={this.state.onBtnClick}
            getBtnAdd={this.getBtnAdd}
          />
        </div>

        <Footer onBtnClickId={this.onBtnClickId} getBtnAdd={this.getBtnAdd} />
      </div>
    );
  }
}

export default App;
