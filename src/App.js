import React, {useEffect} from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    events();
  }, []);
  const [state, setstate] = React.useState([]);
  const events = () => {
    axios
      .get("http://localhost:3001/api")
      .then(res => res.json())
      .then(response => setstate(response.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {state.map(list => {
        return <li>{list.id}</li>;
      })}
    </div>
  );
};

export default App;





/*import React from "react";
import axios from "axios";
import Summoner from "./Summoner";
import Search from "./Search";
const SUMMONER_NAME = "판다삐"
const API_KEY = "RGAPI-190a6f56-aea5-4b1b-8fbf-64d957731d7e";

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

*/