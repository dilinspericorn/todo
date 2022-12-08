import React, { Component } from 'react';

export class FilterContent extends Component {
  render() {
    return (
      <div>
        <button
          className="m-1"
          id={1}
          onClick={(e) => this.props.onBtnClickId(e.target.id)}
        >
          All
        </button>
        <button
          className="m-1"
          id={2}
          onClick={(e) => this.props.onBtnClickId(e.target.id)}
        >
          Active
        </button>
        <button
          className="m-1"
          id={3}
          onClick={(e) => this.props.onBtnClickId(e.target.id)}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default FilterContent;
