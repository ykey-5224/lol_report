import React from "react";
import SearchResultPresenter from "./SearchResultPresenter";
import { lolApi } from "../../api";

export default class extends React.Component {
  state = {
    flag:0,
    name:null,
    summonerLevel:null,
    revisionDate:null,
    accountId:null,
    mathces:[]
  };
   getSummonerData =async () =>{
    const {
      match: {
        params: { name:summonerName }
      }
    } = this.props;
  try {
    const {
      data: { name,summonerLevel,revisionDate,accountId}
    } = await lolApi.searchSummoner(summonerName);
    this.setState({
      name,summonerLevel,revisionDate,accountId
    });
    } catch {
    } finally {
    }

  }
  getMatchData =async () =>{
    console.log("match")
    const {
      accountId
    } = this.state;
  try {
    const {
      data: { }
    } = await lolApi.searchMatch(accountId);
    this.setState({
      
    });
    } catch(e) {
      console.log(e)
    } finally {
    }

  }
  getData = () =>{
    this.getSummonerData();
    this.getMatchData();
  }

  componentDidMount() {
    this.getData();
    console.log("mount")
  }
  componentDidUpdate(prevProps){

    if (this.props.match.params.name !== prevProps.match.params.name) {
       this.getData();
      }
  }

  render() {
    const { name,summonerLevel,revisionDate,matches} = this.state;
    const retDate = new Date(revisionDate);
    const dateString = retDate.getFullYear()+"."+(retDate.getMonth()+1)+"."+retDate.getDate()+"  ";
    const timeSting = retDate.getHours()+":"+retDate.getMinutes();

    return (
      <SearchResultPresenter
      name={name}
      summonerLevel={summonerLevel}
      revisionDate = {dateString+timeSting}
      matches = {matches}
      />
    );
  }
}