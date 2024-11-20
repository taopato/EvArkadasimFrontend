// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Menü</Text>
      <Button
        title="Harcama Ekranına Git"
        onPress={() => navigation.navigate('Expense')}
      />
      <Button
        title="Harcama Listesi"
        onPress={() => navigation.navigate('ExpenseList')}
      />
      <Button 
        title="Ev Arkadaşı Ekle" 
        onPress={() => navigation.navigate('AddHousemate')} 
      />
      <Button 
        title="Ev Arkadaşları" 
        onPress={() => navigation.navigate('HousemateList')} 
      />
      <Button 
        title="Alacak-Borç Özeti" 
        onPress={() => navigation.navigate('DebtSummary')} 
      />
      <Button 
        title="Yeni Harcama Ekle" 
        onPress={() => navigation.navigate('AddExpense')} 
      />
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
