import React, { Component } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class Calendar extends Component {
  lastAcceptedDay = today => {
    let maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 21);
    return maxDate;
  };

  render() {
    const minDate = new Date();
    const maxDate = this.lastAcceptedDay(minDate);
    return (
      <div>
        {/* 
            set minDate as today, so user can not select a day before today
            set maxDate as today + 21 days, to limit the user to select inspection slot within next 3 weeks.
          */}
        <ReactCalendar
          onChange={this.props.handleCalendarChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    );
  }
}
