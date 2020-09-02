import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from 'react-bootstrap';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

// State Management
import saga from './store/saga';
import reducer from './store/reducer';
import { getJokes } from './store/actions';
import { selectJokes } from './store/selectors';

// styles
import styles from './styles/Home.module.scss';

export function Home({ jokesData, getJokes }) {
  useInjectSaga({ key: 'jokes', saga });
  useInjectReducer({ key: 'jokes', reducer });

  // eslint-disable-next-line no-console
  console.log(jokesData);
  return (
    <div>
      <h1 className="pm">Sanaz Jooooon </h1>
      <Button variant="primary" onClick={getJokes}>
        {' '}
        click here{' '}
      </Button>
      <div className={styles.test}>sanaz jonam</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  jokesData: selectJokes(),
});

export function mapDispatchToProps(dispatch) {
  return { getJokes: () => dispatch(getJokes()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  jokesData: PropTypes.object,
  getJokes: PropTypes.func,
};

export default compose(withConnect, memo)(Home);
