import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import useApi from '../hooks/useApi';
import api from '../services/api';

export default function HousemateDeleteScreen({ route, navigation }) {
  const { housemateId } = route.params;
  const { data: housemate, loading, error, fetchData } = useApi(`/Housemates/${housemateId}`);

  useEffect(() => {
    fetchData();
  }, [housemateId]);

  const handleDelete = async () => {
    if (housemate?.debt !== 0 || housemate?.credit !== 0) {
      Alert.alert('Uyarı', 'Ev arkadaşının alacak/borç durumu sıfırlanmadı. Silinemiyor.');
      return;
    }

    try {
      await api.delete(`/Housemates/${housemateId}`);
      Alert.alert('Başarılı', 'Ev arkadaşı başarıyla silindi.');
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert('Hata', 'Ev arkadaşı silinemedi.');
    }
  };

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
    <View style={styles.container}>
      <Text style={styles.title}>Ev Arkadaşı Detayları</Text>
      <Text style={styles.label}>Adı: {housemate?.name}</Text>
      <Text style={styles.label}>E-posta: {housemate?.email}</Text>
      <Text style={styles.label}>Alacak: {housemate?.credit} TL</Text>
      <Text style={styles.label}>Borç: {housemate?.debt} TL</Text>
      <Button title="Sil" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  label: { fontSize: 18, marginBottom: 8 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', fontSize: 16 },
});
