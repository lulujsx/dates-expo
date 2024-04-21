// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Administrador de citas {''}
        <Text style={styles.boldTitle}>Veterinaria</Text>
      </Text>

      <Pressable onPress={()=> setModalVisible(true)} style={styles.bttnNewDate}>
        <Text style={styles.bttnNewDateText}>Nueva Cita</Text>
      </Pressable>

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  boldTitle: {
    fontWeight: '900'
  },
  bttnNewDate: {
    backgroundColor: '#6D28D9',
    padding:15,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 30
  },
  bttnNewDateText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    fontSize: 18, 
    textTransform: 'uppercase',
  }
});
