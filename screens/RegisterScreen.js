import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../services/api';

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!userName || !password) {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre gereklidir.');
      return;
    }

    try {
      const response = await api.post('/Auth/register', { userName, password });

      if (response.status === 200) {
        Alert.alert('Başarılı', 'Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
        navigation.navigate('Login'); // Login ekranına yönlendirme
      }
    } catch (error) {
      console.error('Register Hatası:', error.message);
      const errorMessage = error.response?.data?.Message || 'Kayıt sırasında bir sorun oluştu.';
      Alert.alert('Hata', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default RegisterScreen;
