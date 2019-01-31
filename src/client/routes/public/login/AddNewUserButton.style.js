import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  newUser: {
    display: 'flex',
    justifyContent: 'center',
    width: 285,
    height: 112,
    borderWidth: 3,
    borderColor: 'rgba(255, 0, 0, 0.3)',
    borderRadius: 25,
    marginTop: 14
  },
  username: {
    fontSize: 32,
    color: 'rgba(255, 0, 0, 0.3)',
    textDecorationLine: 'underline',
    textAlign: 'center',
  }
});
