import React from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { lolApi } from "../../api";

export default class extends React.Component {
  state = {
    name:null,
    summonerLevel:null,
    revisionDate:null
  };
   getData =async () =>{
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

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(){
    this.getData();
  }

  render() {
    const { name,summonerLevel,revisionDate} = this.state;
    const retDate = new Date(revisionDate);
    const dateString = retDate.getFullYear()+"."+(retDate.getMonth()+1)+"."+retDate.getDate()+"  ";
    const timeSting = retDate.getHours()+":"+retDate.getMinutes();

    return (
      <SearchResultPresenter
      name={name}
      summonerLevel={summonerLevel}
      revisionDate = {dateString+timeSting}
      />
    );
  }
}