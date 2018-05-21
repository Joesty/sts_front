

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Redirector = ({ nextUrl }) => {
  if(!nextUrl) {
    return null;
  }

  return (
    <Redirect
      to={{
        pathname: nextUrl,
      }}
    />
  );
};

const mapState = (state) => ({ nextUrl: state.shared.nextUrl });

export default connect(mapState)(Redirector);