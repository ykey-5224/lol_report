import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 10px;
`;

const HomePresenter = ({ name,summonerLevel,revisionDate }) => (
  <>
    <Helmet>
      <title>닷지할까</title>
    </Helmet>
      <Container>
        {/* <Helmet>
          <title></title>
        </Helmet>
        <Section title="닷지할까">
            <div>소환사명 : {name}</div>
            <div>소환사레벨 : {summonerLevel}</div>
            <div>최근접속일 : {revisionDate}</div>
          </Section> */}
          
      </Container>
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.string,
  summonerLevel:PropTypes.number,
  revisionDate:PropTypes.string
};

export default HomePresenter;