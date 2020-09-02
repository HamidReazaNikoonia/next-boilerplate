import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import saga from './saga';
import reducer from './reducer';
import { getJokes } from './actions';
import { selectJokes } from './selectors';

export function Home({ jokesData, getJokes }) {
  useInjectSaga({ key: 'jokes', saga });
  useInjectReducer({ key: 'jokes', reducer });

  // eslint-disable-next-line no-console
  console.log(jokesData);
  return (
    <div>
      <h1>test</h1>
      <div onClick={getJokes}>click here</div>
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
