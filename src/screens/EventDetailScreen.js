import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventDetailScreen({ route }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.info}>Tanggal: {event.date}</Text>
      <Text style={styles.info}>Lokasi: {event.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});
