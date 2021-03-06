import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display : inline-block;
`;

const SearchPresenter = ({ summonerName,inputChange }) => (
  <>
     <Container> 
        <input type="text" value={summonerName} placeholder="소환사이름" onChange={inputChange} />
        <Link to={`/search/${summonerName}`}>
            <button>Search</button>
        </Link>
      </Container>
  </>
);

SearchPresenter.propTypes = {
  nowPlaying: PropTypes.string,
  summonerLevel:PropTypes.number,
  revisionDate:PropTypes.string
};

export default SearchPresenter;