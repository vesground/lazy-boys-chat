import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './SearchResultListItem.style';

export default function SearchResultListItem({ foundUser, onUserClick, searchInputValue }) {
  const username = foundUser.name;

  return (
    <TouchableOpacity style={Styles.foundUser} onPress={() => onUserClick(username)}>
      <Text style={Styles.username}>{username}</Text>
    </TouchableOpacity>
  );
}

SearchResultListItem.propTypes = {
  foundUser: PropTypes.object,
  searchInputValue: PropTypes.string,
  onUserClick: PropTypes.func.isRequired,
}
