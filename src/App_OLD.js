import React from "react";
import axios from "axios";
import Summoner from "./Summoner";
import Search from "./Search";
const SUMMONER_NAME = "판다삐"
const API_KEY = "RGAPI-1a90fc88-f1c8-44d3-9ac0-bc621e89fd96";

class App extends React.Component {
  state = {
    isLoading:true,
    summoner:{}
  };
  getSummonerInfo = async () =>{
    const URL = `/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`;
    const summoner = await axios.get(URL,);
    console.log(summoner);
    this.setState({summoner:summoner.data,isLoading: false})
  };
  componentDidMount(){
    this.getSummonerInfo();
  }
  render() {
    const { isLoading,summoner } = this.state;
    return (
      <div>{isLoading 
          ? "Loading..." 
          : <Summoner  
            accountId={summoner.accountId}
            id={summoner.id}
            name={summoner.name}
            profileIconId={summoner.profileIconId}
            puuid={summoner.puuid}
            revisionDate={summoner.revisionDate}
            summonerLevel={summoner.summonerLevel}
          />}
          </div>
    );
  }
}
export default App;

