import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: 285,
    height: 34,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 17,
    marginTop: 10,
    marginBottom: 15,
  },
  searchIcon: {
    left: 13,
    alignSelf: 'center',
  },
  textInput: {
    width: '80%',
    left: 20,
  },
  placeholder: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.32)'
  }
});
