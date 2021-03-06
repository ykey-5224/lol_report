import React from "react";
import HeaderPresenter from "./HeaderPresenter";
import { lolApi } from "../../api";

export default class extends React.Component {
  state = {
  };

  async componentDidMount() {
  }

  render() {

    return (
      <HeaderPresenter/>
    );
  }
}