import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  //handle delete options
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  // handle single delete option

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const chooseoption = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: chooseoption }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Please enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this item is already added";
    }
    this.setState((preState) => ({
      options: preState.options.concat(option),
    }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log("error in json in local storage");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  render() {
    const title = "Indecision app";
    const subtitle = "put your hands in the life of a computer!!";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0 ? true : false} handlePick={this.handlePick} />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        ></OptionModal>
      </div>
    );
  }
}
