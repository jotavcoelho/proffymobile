import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo-Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 28,
    maxWidth: 160,
    marginVertical: 10,
  },

});

export default styles;
