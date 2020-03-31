import React, { Component } from "react";
import Calendar from "./components/Calendar";
import InspectionSlotList from "./components/InspectionSlot/list";
export default class App extends Component {
  state = {
    selectedDay: new Date()
  };

  handleCalendarChange = selectedDay => {
    this.setState({ selectedDay });
  };

  render() {
    const selectedDay = this.state.selectedDay
      ? this.state.selectedDay
      : "No Day Selected!";
    return (
      <div className="App container">
        <div className="row mt-4 justify-content-md-center">
            <Calendar handleCalendarChange={this.handleCalendarChange} />
        </div>
        <div className="row mt-4 justify-content-md-center">
        <InspectionSlotList day={selectedDay} />
        </div>
      </div>
    );
  }
}
