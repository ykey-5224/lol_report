import React from "react";
import HomePresenter from "./HomePresenter";
import { lolApi } from "../../api";

export default class extends React.Component {
  state = {
    name:null,
    summonerLevel:null,
    revisionDate:null
  };

  async componentDidMount() {
    // try {
    //   const {
    //     data: { name,summonerLevel,revisionDate}
    //   } = await lolApi.test();
    //   this.setState({
    //     name,summonerLevel,revisionDate
    //   });
    // } catch {
    // } finally {
    // }
  }

  render() {
    const { name,summonerLevel,revisionDate} = this.state;
    const retDate = new Date(revisionDate);
    const dateString = retDate.getFullYear()+"."+(retDate.getMonth()+1)+"."+retDate.getDate()+"  ";
    const timeSting = retDate.getHours()+":"+retDate.getMinutes();
    return (
      <HomePresenter
      name={name}
      summonerLevel={summonerLevel}
      revisionDate = {dateString+timeSting}
      />
    );
  }
}