import React from "react";
import HomePresenter from "./HomePresenter";
import { lolApi } from "../../api";

export default class extends React.Component {
  state = {
    name:null
  };

  async componentDidMount() {
    try {
      const {
        data: { name: name }
      } = await lolApi.test();
      this.setState({
        name,
      });
    } catch {

    } finally {

    }
  }

  render() {
    const { name,  } = this.state;
    return (
      <HomePresenter
      name={name}
      />
    );
  }
}