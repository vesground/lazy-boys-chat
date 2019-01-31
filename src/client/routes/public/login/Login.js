import React, { Component } from 'react';

import Styles from './Login.style';
import Search from 'client/components/search/Search';

export default function Login(props) {
  console.log('public', props)

  return (
    <Search navigation={props.navigation} />
  );
}
