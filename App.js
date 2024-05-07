import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from './src/firebaseConnection';
import { useState, useEffect } from 'react';

export default function App() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value) => {
      alert("Usuário criado: ") + value.user.email);
    })
  }
  
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      placeholder='Digite o seu e-mail'
      />

      <TextInput
      style={styles.input}
      onChangeText={(texto) => setSenha(texto)}
      value={senha}
      placeholder='Digite a sua senha'
      />

      <Button
      title='Cadastrar'
      onPress={cadastrar}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  input: {
    width:200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5
  }
});
