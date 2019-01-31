import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '105%',
    height: 50,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  dialogDetails: {
    marginLeft: 12,
    flexDirection: 'row',
  },
  dialogDetailsHeader: {
    flexDirection: 'row',
  },
  dialogName: {
    fontSize: 18,
  },
  newMessagesCounter: {
    backgroundColor: '#FF7A7A',
    width: 32,
    height: 21,
    marginLeft: 9,
    borderRadius: 9,
  },
  newMessages: {
    top: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
  message: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 4,
  },
  time: {
    left: 15,
    // fontSize: 12,
    color: 'rgba(0, 0, 0, 0.42)',
  },
});
