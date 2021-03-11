import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Search from "../Search";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

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

const HomePresenter = ({ name,summonerLevel,revisionDate }) => {
  const classes = useStyles();
  return(
  <>
      <Container className = {classes.main}>
      <HomeBody> 홈화면의 LOGO </HomeBody>
      <SearchDiv> 검색 영역
          <Search/>
      </SearchDiv>
      </Container>
  </>
  )
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.string,
  summonerLevel:PropTypes.number,
  revisionDate:PropTypes.string
};

export default HomePresenter;