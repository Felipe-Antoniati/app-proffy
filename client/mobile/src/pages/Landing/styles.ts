import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: 30,
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
   },

   button: {
    height: 130,
    width: "48%",
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 23,
    justifyContent: 'space-between',
   },

   buttonPrimary: {
     backgroundColor: '#9871f5',
   },

   buttonSecondary: {
     backgroundColor: '#04D361',
   },

   buttonText: {
     fontFamily: 'Archivo_700Bold',
     color: '#FFF',
     fontSize: 18,
   },

   totalConnections: {
      fontFamily: 'Poppins_400Regular',
      color: '#D4C2FF',
      fontSize: 12,
      lineHeight: 20,
      maxWidth: 220,
      marginTop: 28,
   },
});

export default styles;