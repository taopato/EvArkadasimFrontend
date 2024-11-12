import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://192.168.1.102:7000/api/Users/Login', { // Güncellenmiş IP adresi
      username,
      password,
    })
      .then(response => {
        if (response.data === 'Doğru') {
          navigation.navigate('Home');
        } else {
          Alert.alert('Hata', 'Yanlış kullanıcı adı veya şifre.');
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Hata', 'Sunucuya bağlanırken bir sorun oluştu.');
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Giriş Yap</Text>
      <TextInput
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        style={{ width: 200, padding: 10, marginBottom: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ width: 200, padding: 10, marginBottom: 10, borderWidth: 1 }}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
}
