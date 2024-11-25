import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!userName || !password) {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre gereklidir.');
      return;
    }

    try {
      const response = await api.post('/Auth/login', { userName, password });

      if (response.status === 200) {
        const { token } = response.data;
        await AsyncStorage.setItem('token', token); // Token'ı kaydet
        Alert.alert('Başarılı', 'Giriş başarılı!');
        navigation.navigate('Home'); // Ana ekrana yönlendirme
      }
    } catch (error) {
      console.error('Login Hatası:', error.message);
      const errorMessage = error.response?.data?.Message || 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.';
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
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};
Alert.alert('Hata', error.response?.data || 'Bir sorun oluştu, lütfen tekrar deneyin.');

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default LoginScreen;
