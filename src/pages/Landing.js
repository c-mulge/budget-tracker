import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #c4d6b0;
  color: #291f1e;
  text-align: center;
`;

const BrandName = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
`;

const Landing = () => (
  <LandingContainer>
    <BrandName>Btracker</BrandName>
    <Description>Welcome to Btracker, your personal budget tracking tool. Manage your finances efficiently and effortlessly.</Description>
  </LandingContainer>
);

export default Landing;
