import React, { useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useApi from '../hooks/useApi';

export default function HousemateListScreen() {
  const { data: housemates, loading, error, fetchData } = useApi('/Housemates');

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={housemates}
      keyExtractor={(item) => item.housemateId.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemEmail}>{item.email}</Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: { padding: 16 },
  itemContainer: { backgroundColor: '#f8f9fa', padding: 12, marginVertical: 8, borderRadius: 8 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemEmail: { fontSize: 14, color: '#555' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', fontSize: 16 },
});
