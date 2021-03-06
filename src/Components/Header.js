import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
    state={
        summonerName:''
    }
    inputChange = (e) => {
        this.setState({
            summonerName: e.target.value
        });
    }
    render() {
        const { summonerName } = this.state;
        const { inputChange, searchClick } = this;
      return (
        <div className="Header">
          <header className="App-header">
          </header>
          <div> 헤더화면이에용
            <input type="text" value={summonerName} placeholder="소환사이름" onChange={inputChange} />
            <Link to={`/search/${this.state.summonerName}`}>
                <button>Search</button>
            </Link>
            </div>
        </div>
      );
    }
  }
  
  export default withRouter(Header);