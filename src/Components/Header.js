import React from 'react';
import { Link, withRouter } from "react-router-dom";

// export default withRouter(({ history }) => (
//   <div>
//         <input type="text" id ="sumonnerName"/>
          
//           <a href="/#/search/판다삐" >판다삐 ㄱ</a>
//   </div>
// ));


class Header extends React.Component {
    state={
        summonerName:''
    }
    inputChange = (e) => {
        this.setState({
            summonerName: e.target.value
        });
    }
    searchClick = () => {
        console.log(`summonerName는:${this.state.summonerName}`);
        //history.pushState(`/#/search/${this.state.summonerName}`)
        this.props.history.push(`/search/${this.state.summonerName}`);
        console.log(this.props);
    }
    render() {
        const { summonerName } = this.state;
        const { inputChange, searchClick } = this;
      return (
        <div className="Header">
          <header className="App-header">
            <input type="text" value={summonerName} placeholder="소환사이름" onChange={inputChange} />
            <button onClick={searchClick}>Search</button>
          </header>
        </div>
      );
    }
  }
  
  export default withRouter(Header);