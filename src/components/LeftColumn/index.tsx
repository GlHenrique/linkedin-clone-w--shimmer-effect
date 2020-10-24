import React from 'react';

import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC = () => (
  <Container className="left-column">
    <ProfilePanel />
    <HashtagPanel />
  </Container>
);

export default LeftColumn;
