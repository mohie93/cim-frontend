import React, { Component } from "react";
import InspectionSlotItem from "./item";
import BookingForm from "../Booking/Form";
export default class list extends Component {
  weekWorkingDays = {
    "1": "Mon",
    "2": "Tue",
    "3": "Wed",
    "4": "Thu",
    "5": "Fri"
  };

  weekendWorkingDays = { "6": "Sat" };

  getNumberOfSlotsInOneHour = day => {
    if (this.weekWorkingDays[day]) return 4;
    if (this.weekendWorkingDays[day]) return 8;
    return 0;
  };

  getSlots = slotsInOneHour => {
    if (slotsInOneHour === 4) {
      return [":00", ":15", ":30", ":45"];
    } else if (slotsInOneHour === 8) {
      return [
        ":00",
        ":7:30",
        ":15",
        ":22:30",
        ":30",
        ":37:30",
        ":45",
        ":52:30"
      ];
    }
    return [];
  };

  getWorkingSlots = (range, slots) => {
    const { min, max } = range;
    const workingSlots = [];
    for (let i = min; i <= max; i++) {
      for (let j = 0; j < slots.length; j++) {
        const timeSlot = `${i}${slots[j]}`;
        workingSlots.push(timeSlot);
      }
    }
    return workingSlots;
  };

  render() {
    const day = this.props.day;
    const slotsInOneHour = this.getNumberOfSlotsInOneHour(
      new Date(this.props.day).getDay()
    );
    const slotsList = this.getSlots(slotsInOneHour);
    const slots = [
      ...this.getWorkingSlots({ min: 9, max: 12 }, slotsList),
      ...this.getWorkingSlots({ min: 1, max: 6 }, slotsList)
    ];
    return slots.length > 0 ? (
      <div className="container">
        <div className="row mb-4 justify-content-md-center">
          <BookingForm />
        </div>
        <div className="row">
          <div className="alert alert-primary col-md-12 text-center">
            Available Slots
          </div>
        </div>
        <div className="row">
          {slots.map((slot, index) => (
            <InspectionSlotItem day={day} slot={slot} key={index} />
          ))}
        </div>
      </div>
    ) : (
      <div className="alert alert-danger col-md-12 text-center">
        No Slot Available
      </div>
    );
  }
}
