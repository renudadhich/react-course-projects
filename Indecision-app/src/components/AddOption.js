import React from "react";
// import ReactDOM from "react-dom";
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error,
    }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        <label className="add-option-error">{this.state.error}</label>
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option-input" type="text" name="option"></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
