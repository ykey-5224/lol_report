import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ name }) => (
  <>
    <Helmet>
      <title>닷지할까</title>
    </Helmet>
      <Container>
        <Helmet>
          <title></title>
        </Helmet>
        <Section title="닷지할까">
            소환사명 : {name}
          </Section>
      </Container>

  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.string,
};

export default HomePresenter;