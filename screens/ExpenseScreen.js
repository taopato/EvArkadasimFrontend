import React from 'react';
import { View, Text, Button } from 'react-native';
import ExpenseList from '../components/ExpenseList';

export default function ExpenseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Harcama Ekranı</Text>
      <ExpenseList />
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    </View>
  );
}
