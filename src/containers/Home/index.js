import React from 'react';
import PropTypes from 'prop-types';

export function Home({ t }) {
  return (
    <div>
      <h3>{t('phrases.welcome')}</h3>
    </div>
  );
}

Home.propTypes = {
  t: PropTypes.func,
};

export default Home;
