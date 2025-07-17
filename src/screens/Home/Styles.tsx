import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0A2F5A',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'column',
    borderBottomColor: 'black',
    borderBottomWidth: 4,
    borderTopColor: 'black',
    borderTopWidth: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#B0BEC5',
    width: '100%'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default styles;