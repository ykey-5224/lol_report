import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";


const Header = styled.div`
  height: 50px;
  text-align : center;
  background-color:#8888ee;
`;
const Title = styled.span`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
`;


const HeaderPresenter = () => (
  <>
    <Helmet>
      <title>헤더화면</title>
    </Helmet>
        <Header>
          <Title>헤더영역 이에용</Title>
        </Header>
        
  </>
);


export default HeaderPresenter;