import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Search from "../Search";

const HomeDiv = styled.div`
`;

const HomeBody = styled.div`
  border: 1px solid black;
  height: 200px;
  text-align: center;
  line-height: 200px;
  margin-top : 10px;
`;
const SearchDiv = styled.div`
  border: 1px solid black;
  width: 100 px;
  height: 800px;
  diplay : flex;
  justify-content: center;
  align-items: center;
  margin-top : 10px
`;

const HomePresenter = ({ name,summonerLevel,revisionDate }) => (
  <>
    <Helmet>
      <title>홈화면이에요</title>
    </Helmet>
      <HomeDiv>
      <HomeBody> 홈화면의 LOGO </HomeBody>
      <SearchDiv> 검색 영역
          <Search/>
      </SearchDiv>
      </HomeDiv>
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.string,
  summonerLevel:PropTypes.number,
  revisionDate:PropTypes.string
};

export default HomePresenter;