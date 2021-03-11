import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link, withRouter } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));


const SearchPresenter = ({ summonerName,inputChange }) => {
  const classes = useStyles();

  return(
  <>
     <Container className = {classes.main}> 
      <TextField 
            variant="outlined" 
            value={summonerName} 
            placeholder="소환사이름" 
            onChange={inputChange}
            autoFocus/>
        <Link to={`/search/${summonerName}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        </Link>
      </Container>
  </>
  )
};

SearchPresenter.propTypes = {
  nowPlaying: PropTypes.string,
  summonerLevel:PropTypes.number,
  revisionDate:PropTypes.string
};

export default SearchPresenter;