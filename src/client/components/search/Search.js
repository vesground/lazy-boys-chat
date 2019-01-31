import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Styles from './Search.style';

import SearchInput from 'client/components/search/SearchInput';
import SearchResultList from 'client/components/search/SearchResultList';
import AddNewUserButton from 'client/routes/public/login/AddNewUserButton';
import { get, post } from 'client/api/index';

export default class Search extends Component {
  state = {
    searchQuery: '',
    foundUsers: []
  }

  async componentDidMount() {
    const users = await get('http://localhost:9000/api/v1/users');

    this.setState({ foundUsers: users.data });
  }

  async handelSearchUserInputValueChange(text) {
    const query = text && { name: text };
    const foundUsers = await get('http://localhost:9000/api/v1/users', query);

    this.setState({ searchQuery: text, foundUsers: foundUsers.data });
  }

  handleUserClick(username) {
    const { foundUsers } = this.state;
    const user = foundUsers.find(foundUser => {
      return foundUser.name === username;
    });

    console.log('user was choosen', username);

    this.props.navigation.navigate('private', { username });
  }

  async handleOnAddUserButtonClick(username) {
    const data = { name: username };
    const newUser = await post('http://localhost:9000/api/v1/users', data);

    console.log('new user', newUser);

    // this.props.navigation.navigate('private', { username });
  }

  render() {
    const { foundUsers, searchQuery } = this.state;
    const isUserFound = foundUsers && foundUsers.length > 0;

    console.log('search render', this.props);

    return (
      <View style={Styles.loginContainer}>
        <Text style={Styles.searchTitle}>Search</Text>
        <SearchInput value={searchQuery} onSeachInputValueChange={(text) => this.handelSearchUserInputValueChange(text) } />
        <View style={Styles.hr} />
        {isUserFound
          ? <SearchResultList searchInputValue={searchQuery} foundUsers={foundUsers} onUserClick={(userName) => this.handleUserClick(userName)} />
          : <AddNewUserButton username={searchQuery} onAddNewUserButtonClick={(username) => this.handleOnAddUserButtonClick(username)} />
        }
      </View>
    );
  }
}
