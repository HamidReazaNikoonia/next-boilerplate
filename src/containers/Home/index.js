import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const HelloWord = styled('h1')`
  font-size: 36px;
`;

const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export function Home({ t }) {
  return (
    <Container>
      <HelloWord>{t('phrases.welcome')}</HelloWord>
    </Container>
  );
}

Home.propTypes = {
  t: PropTypes.func,
};

export default Home;
