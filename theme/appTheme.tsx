import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'tomato',
    gap:20
  },
  tittleBienvenidos: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight:'bold'
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius:20
  },
  bottonAccerder: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius:20
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius:20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold'
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width:150,
    borderRadius:10
  },
});
