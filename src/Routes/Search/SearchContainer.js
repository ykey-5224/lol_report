import React from "react";
import SearchPresenter from "./SearchPresenter";
import { lolApi } from "../../api";

export default class extends React.Component {
  state = {
    name:null,
    summonerLevel:null,
    revisionDate:null
  };

  async componentDidMount() {
     const {
        match: {
          params: { name:summonerName }
        }
      } = this.props;
    try {
      const {
        data: { name,summonerLevel,revisionDate}
      } = await lolApi.search(summonerName);
      this.setState({
        name,summonerLevel,revisionDate
      });
    } catch {
    } finally {
    }
  }

  render() {
    const { name,summonerLevel,revisionDate} = this.state;
    const retDate = new Date(revisionDate);
    const dateString = retDate.getFullYear()+"."+(retDate.getMonth()+1)+"."+retDate.getDate()+"  ";
    const timeSting = retDate.getHours()+":"+retDate.getMinutes();

    return (
      <SearchPresenter
      name={name}
      summonerLevel={summonerLevel}
      revisionDate = {dateString+timeSting}
      />
    );
  }
}