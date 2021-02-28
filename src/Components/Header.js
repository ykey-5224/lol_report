import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

// export default withRouter(({ history }) => (
//   <div>
//         <input type="text" id ="sumonnerName"/>
          
//           <a href="/#/search/판다삐" >판다삐 ㄱ</a>
//   </div>
// ));


class Header extends Component {
    state={
        summonerName:''
    }
    inputChange = (e) => {
        this.setState({
          id: e.target.value
        });
    }
    searchClick = () => {
        console.log(`summonerName는:${this.state.summonerName}`);
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <input type="text" placeholder="소환사이름" onChange={inputChange} />
            <button onClick={searchClick}>로그인</button>
          </header>
        </div>
      );
    }
  }
  
  export default Header;