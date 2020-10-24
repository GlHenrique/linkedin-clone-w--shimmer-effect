import React from 'react';

import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC = () => (
  <Container className="right-column">
    <TrendingPanel />
    <TrendingPanel />
  </Container>
);

export default RightColumn;
