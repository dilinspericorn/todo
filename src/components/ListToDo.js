import React, { Component } from 'react';
import { onlyUnique } from './Utils';

export class ListToDo extends Component {
  getChecked = (data, e) => {
    this.props.getchecked(data, e);
  };


  render() {
    let Items = this.props.input;
    let checkeditems = this.props.checked
      .map((data) => data.value)
      .filter(onlyUnique);
      console.log(checkeditems );
    if (this.props.onBtnClick === 1) {
      Items = this.props.input;
    }
    if (this.props.onBtnClick === 2) {
      Items = this.props.input.filter((data) => checkeditems.includes(data));
      console.log(Items);
    }
    if (this.props.onBtnClick === 3) {
      Items = this.props.input.filter((data) => !checkeditems.includes(data));
    }

    let todoList = Items.map((data, index) => {
      return (
        <div key={index}>
          <div className="form-check ml-5">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => this.getChecked(data, e.target.checked)}

              checked={checkeditems.includes(data) }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {data}
            </label>
          </div>
        </div>
      );
    });
    return <div className="todo-list">{todoList}</div>;
  }
}

export default ListToDo;
