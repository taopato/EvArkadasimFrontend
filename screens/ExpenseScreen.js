// screens/ExpenseScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ExpenseList from '../services/api';

export default function ExpenseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Harcama Ekranı</Text>
      <ExpenseList />
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
