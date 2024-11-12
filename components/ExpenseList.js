import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.102:7000/api/Expenses') // Güncellenmiş IP adresi
      .then(response => setExpenses(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.itemName}</Text>
      <Text>{item.cost} TL</Text>
    </View>
  );

  return (
    <FlatList
      data={expenses}
      keyExtractor={item => item.expenseId.toString()}
      renderItem={renderItem}
    />
  );
}
