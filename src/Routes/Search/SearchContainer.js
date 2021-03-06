import React from "react";
import SearchPresenter from "./SearchPresenter";
import { lolApi } from "../../api";
import { Link, withRouter } from "react-router-dom";
export default class extends React.Component {
  state={
    summonerName:''
  }
  componentDidMount() {
  }
  inputChange = (e) => {
    this.setState({
        summonerName: e.target.value
    });
}
  render() {
    const { summonerName } = this.state;
    const { inputChange } = this;
  return (
    <SearchPresenter
      summonerName={summonerName}
      inputChange = {inputChange}
    />
  );
  }
}