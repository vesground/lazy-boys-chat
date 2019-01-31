import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image } from 'react-native';

import Styles from './SearchInput.style';
import { CustomIcon } from 'client/utils';

export default function SearchInput({ value, onSeachInputValueChange }) {
  return (
    <View style={Styles.searchContainer}>
      <CustomIcon style={Styles.searchIcon} name='search' size={20} color='gray' />
      <TextInput
        style={Styles.textInput}
        value={value}
        placeholder='Type to search'
        keyboardAppearance='dark'
        autoCapitalize='none'
        onChangeText={onSeachInputValueChange}
      />
    </View>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSeachInputValueChange: PropTypes.func.isRequired
}
