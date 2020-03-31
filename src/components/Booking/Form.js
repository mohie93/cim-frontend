import React, { Component } from "react";

export default class Form extends Component {
  state = {
    plateNumber: "",
    fullName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { plateNumber, fullName } = this.state;
    this.props.submit({plateNumber, fullName});
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      plateNumber: "",
      fullName: ""
    });
  };

  render() {
    return (
      <div className="col-md-12">
        <form>
          <div className="form-row">
            <div className="col col-md-5">
              <input
                type={"text"}
                name={"plateNumber"}
                className={"form-control"}
                placeholder={"Car Plate Number...."}
                onChange={this.handleChange}
                value={this.state.plateNumber}
              />
            </div>
            <div className="col col-md-5">
              <input
                type={"text"}
                name={"fullName"}
                className={"form-control"}
                placeholder={"Full Name...."}
                onChange={this.handleChange}
                value={this.state.fullName}
              />
            </div>
            <div className="col">
              <button
                className={"btn btn-dark"}
                type={"button"}
                onClick={this.handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
