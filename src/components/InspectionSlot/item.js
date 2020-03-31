import React, { Component } from "react";

export default class item extends Component {
  handleSlotClick = e => {
    console.log("e", e.target.value);
  };

  render() {
    const slot =
      this.props.slot.length > 0 ? this.props.slot : "No Slot Available";
    return (
      <div>
        <button onClick={this.handleSlotClick} value={slot} className="btn btn-primary m-2">
          {slot}
        </button>
      </div>
    );
  }
}
