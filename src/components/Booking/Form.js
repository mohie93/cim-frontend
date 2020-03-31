import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-row">
            <div className="col">
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Car Plate Number...."}
              />
            </div>
            <div className="col">
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Full Name...."}
              />
            </div>
            <div className="col">
              <button className={"btn btn-dark"}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
