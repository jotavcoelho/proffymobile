import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 30,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontFamily: 'Archivo-Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },

});

export default styles;
