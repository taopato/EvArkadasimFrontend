import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(180); // 3 dakika

  const handleSendCode = () => {
    // Kod gönderme API'si çağrılır
    Alert.alert('Başarılı', 'Doğrulama kodu gönderildi.');
  };

  const handleVerifyCode = () => {
    // Doğrulama kodu API çağrısı
    if (code === '12345') {
      Alert.alert('Başarılı', 'Şifrenizi sıfırlayabilirsiniz.');
    } else {
      Alert.alert('Hata', 'Kod hatalı.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Kod Gönder" onPress={handleSendCode} />
      <TextInput
        style={styles.input}
        placeholder="Doğrulama Kodu"
        value={code}
        onChangeText={setCode}
      />
      <Text>{`Kalan Süre: ${Math.floor(timer / 60)}:${timer % 60}`}</Text>
      <Button title="Doğrula" onPress={handleVerifyCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default ForgotPasswordScreen;
