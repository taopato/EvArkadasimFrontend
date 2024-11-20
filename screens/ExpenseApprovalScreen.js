import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ExpenseApprovalScreen({ route, navigation }) {
  const { expenseId } = route.params;
  const [expense, setExpense] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/Expenses/${expenseId}`)
      .then((response) => {
        setExpense(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Hata', 'Harcama bilgileri yüklenemedi.');
        setLoading(false);
      });
  }, [expenseId]);

  const handleApprove = () => {
    axios.post(`/Approve`, { expenseId })
      .then(() => {
        Alert.alert('Onaylandı', 'Harcama başarıyla onaylandı.');
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Hata', 'Harcama onaylanamadı.');
      });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Harcama Detayları</Text>
      <Text style={styles.label}>Adı: {expense.itemName}</Text>
      <Text style={styles.label}>Tutar: {expense.amount} TL</Text>
      <Text style={styles.label}>Tür: {expense.expenseType}</Text>
      <Text style={styles.label}>
        Durum: {expense.isApproved ? 'Onaylandı' : 'Onay Bekliyor'}
      </Text>

      {!expense.isApproved && (
        <Button title="Onayla" onPress={handleApprove} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
