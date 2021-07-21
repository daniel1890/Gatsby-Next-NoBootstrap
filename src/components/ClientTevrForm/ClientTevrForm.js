import React, { Component } from "react"

class ClientTevrForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "React",
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    })
  }

  formSubmit(event) {
    event.preventDefault()
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.formSubmit}>
          <div
            className="form-btn-container"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={this.state.selectedOption === "Male"}
                  onChange={this.onValueChange}
                />
                Male
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={this.state.selectedOption === "Female"}
                  onChange={this.onValueChange}
                />
                Female
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Other"
                  checked={this.state.selectedOption === "Other"}
                  onChange={this.onValueChange}
                />
                Other
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ClientTevrForm