import React from 'react';

import Panel from '../../Panel';

import { Container, HashtagIcon } from './styles';

const tags = ['rocketseat', 'next-level', 'node', 'react', 'developer'];

const HashtagPanel: React.FC = () => (
  <Container>
    <Panel>
      <span className="title">Hashtags seguidas</span>

      {tags.map((item, index) => (
        <span key={index} className="tag">
          <HashtagIcon />
          {item}
        </span>
      ))}
    </Panel>
  </Container>
);

export default HashtagPanel;
