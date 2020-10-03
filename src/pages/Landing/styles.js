import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: 'Poppins-Regular',
  },

  titleBold: {
    fontFamily: 'Poppins-SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  primaryButton: {
    backgroundColor: '#9871f5'
  },

  secondaryButton: {
    backgroundColor: '#04d361'
  },

  buttonText: {
    fontFamily: 'Archivo-Bold',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins-Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
  }
});

export default styles;