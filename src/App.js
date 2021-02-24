import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    isLoading:true,
    summoner:[]
  };
  getSummonerInfo = async () =>{
    const summoner = await axios.get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/판다삐?api_key=RGAPI-d81d907d-179a-4725-9dc3-2c53531a1af1");
    console.log(summoner);
  };
  componentDidMount(){
    setTimeout(() =>{
      this.setState({isLoading : false})
    },6000);
    this.getSummonerInfo();
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    );
  }
}
export default App;