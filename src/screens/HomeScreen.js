import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import EventCard from '../components/EventCard';
import styles from '../style/styles.js';

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  const addNewEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Tambah Acara"
        onPress={() => navigation.navigate('AddEvent', { addNewEvent })}
      />
      {events.length === 0 ? (
        <Text style={styles.emptyText}>Tidak ada acara</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('EventDetail', { event: item })}
            >
              <EventCard event={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
