import React, { Component } from 'react';

export class FilterContent extends Component {
  render() {
    return (
      <div>
        <button className="m-1" onClick={()=>this.props.onBtnClickId(1)}>All</button>
        <button className="m-1" onClick={()=>this.props.onBtnClickId(2)}>Active</button>
        <button className="m-1" onClick={()=>this.props.onBtnClickId(3)}>Completed</button>
      </div>
    );
  }
}

export default FilterContent;
