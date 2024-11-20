import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function FixedExpensesScreen() {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddFixedExpense = () => {
    if (!expenseName || !amount) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurunuz.");
      return;
    }
    // Sabit gideri backend'e kaydet
    Alert.alert("Başarılı", "Sabit gider kaydedildi.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sabit Gider Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Gider Adı (Ör: Kira)"
        value={expenseName}
        onChangeText={setExpenseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tutar"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Kaydet" onPress={handleAddFixedExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8, width: '80%' },
});
