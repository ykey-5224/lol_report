import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Search from "../Search";

const Container = styled.div`
  padding: 20px;
`;

const SearchResultPresenter = ({ name,summonerLevel,revisionDate,matches }) => (
  <>
      <Container>
        <Helmet>
          <title></title>
        </Helmet>
        <Search/>
        <Section title= {name + "의 정보"}>
            <div>소환사명 : {name}</div>
            <div>소환사레벨 : {summonerLevel}</div>
            <div>최근접속일 : {revisionDate}</div>
        </Section>
        <Section title= {name + "의 전적"}>
            <div>list : {matches}</div>
        </Section>
      </Container>
  </>
);

SearchResultPresenter.propTypes = {
  nowPlaying: PropTypes.string,
  summonerLevel:PropTypes.number,
  revisionDate:PropTypes.string
};

export default SearchResultPresenter;