import React, { Component } from "react";

export default class item extends Component {
  state = {
    selectedSlotValue: null,
    selectedSlotClass: "btn btn-primary m-2"
  };

  handleSlotClick = e => {
    this.setState({
      selectedSlotValue: e.target.value,
      selectedSlotClass: "btn btn-success m-2"
    });
    e.target.class = this.state.selectedSlotClass;
    this.unselectSlots(e.target);
    this.props.handleSelect({slot: e.target.value});
  };

  unselectSlots = element => {
    const slotsButtons = document.querySelectorAll("[prefix='slot']");
    slotsButtons.forEach(slotButton => {
      if (element.value !== slotButton.value)
        slotButton.className = "btn btn-primary m-2";
    });
  };

  render() {
    const slot = this.props.slot;
    return (
      <div>
        <button
          prefix={"slot"}
          onClick={this.handleSlotClick}
          value={slot}
          className={this.state.selectedSlotClass}
          style={{ width: "100px" }}
        >
          {slot}
        </button>
      </div>
    );
  }
}
