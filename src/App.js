import React, { Component } from "react";
import Calendar from "./components/Calendar";
import InspectionSlotList from "./components/InspectionSlot/list";
import Slot from "./services/slot";
export default class App extends Component {
  state = {
    selectedDay: new Date(),
    selectedSlot: "",
    fullName: "",
    plateNumber: "",
    errors: [],
    slots: []
  };

  handleCalendarChange = selectedDay => {
    this.setState({ selectedDay });
  };

  handleSubmit = options => {
    const { fullName, plateNumber } = options;
    this.setState({ fullName, plateNumber });
    this.submit({ fullName, plateNumber, slot: this.state.slot });
  };

  handleSelect = options => {
    const { slot } = options;
    this.setState({ slot });
  };

  displayError = errors => {
    this.setState({ errors });
    setTimeout(() => {
      this.setState({ errors: [] });
    }, 4000);
  };

  componentDidMount = async () => {
    const response = await Slot.all();
    this.setState({ slots: response.data.records });
  };

  submit = options => {
    const { slot, fullName, plateNumber } = options;
    const errors = [];
    if (!slot) errors.push("Please select a slot");
    if (!fullName) errors.push("Please key in your full name");
    if (!plateNumber) errors.push("Please key in your plate number");
    if (errors.length > 0) this.displayError(errors);
    else {
      console.log({ slot, fullName, plateNumber });
      window.location.replace("/");
    }
  };

  render() {
    const slots = this.state.slots;
    const errors = this.state.errors;
    const selectedDay = this.state.selectedDay
      ? this.state.selectedDay
      : "No Day Selected!";
    return (
      <div className="App container">
        {errors.length > 0 ? (
          <div className="row m-4 justify-content-md-center alert alert-danger">
            <ul>
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="row mt-4 justify-content-md-center">
          <Calendar handleCalendarChange={this.handleCalendarChange} />
        </div>
        <div className="row mt-4 justify-content-md-center">
          <InspectionSlotList
            day={selectedDay}
            submit={this.handleSubmit}
            select={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}
