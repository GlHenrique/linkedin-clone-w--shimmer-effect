import React from 'react';

import {
  Container, ProfileCircle, SearchInput, MessageIcon,
} from './styles';

const MobileHeader: React.FC = () => (
  <Container>
    <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQEytk7wVCxqlw/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=gZ8GPlNQ3SraQ9EiqnLW2TsJg7TaVF417ussu2jPO3Y" />
    <SearchInput placeholder="Pesquisar" />
    <MessageIcon />
  </Container>
);

export default MobileHeader;
