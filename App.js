
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel } from './components'
export default function App() {
  const [puntos, setPuntos] = useState([])
  const handleLongPress = ({nativeEvent}) => {
    const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    setPuntos(newPuntos)
    console.log(newPuntos)
  }
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Map onLongPress = {handleLongPress}/>
      <Modal visivility={true}>
        <Text>lala</Text>
        
      </Modal>
      <Panel/>

=======
      <Text>This part is modified</Text>
      <StatusBar style="auto" />
>>>>>>> cd06246d0b49d8a03bf80c5accd8742c96db865a
    </View>
  );
}

const styles = StyleSheet.create({
  

  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
