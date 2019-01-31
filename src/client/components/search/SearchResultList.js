import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, FlatList, View, Text } from 'react-native';

import Styles from './SearchResultList.style';
import SearchResultListItem from 'client/components/search/SearchResultListItem';

export default class SearchResultList extends Component {
  static propTypes = {
    foundUsers: PropTypes.array.isRequired,
    onUserClick: PropTypes.func.isRequired,
    searchInputValue: PropTypes.string
  }

  splitListOnColumns(list, rowsInColumnNumber) {
    const listCopy = list.slice();
    const columns = [];

    while (listCopy.length) {
      const column = listCopy.splice(0, rowsInColumnNumber);
      columns.push(column);
    }

    return columns;
  }

  render() {
    const { foundUsers, onUserClick, searchInputValue } = this.props;
    const sortedUsers = this.splitListOnColumns(foundUsers, 3);

    return (
      <FlatList horizontal
                style={Styles.foundUsers}
                data={sortedUsers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(column) => {
                  return (
                    <View style={Styles.column}>
                      {
                        column.item.map((user, index) => {
                          return (
                            <SearchResultListItem key={index}
                            foundUser={user}
                            onUserClick={(name) => onUserClick(name)} />
                          )})
                      }
                    </View>
                )}} />

    );
  }
}
