import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddEventScreen({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const { addNewEvent } = route.params;

  const handleAddEvent = () => {
    if (!title || !date || !location) {
      Alert.alert('Kesalahan', 'Harap isi semua bidang.');
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      location,
    };

    addNewEvent(newEvent);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Judul Acara"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Tanggal Acara (YYYY-MM-DD)"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Lokasi"
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Simpan" onPress={handleAddEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});
