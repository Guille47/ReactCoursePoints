import React from 'react'
import { StyleSheet, Dimensions, View, Text, Modal } from 'react-native'
export default ({children, visivility})=>{
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visivility}
      >
        <View style={styles.center}>
          <View style={ styles.modalView }>
            {children}
          </View>
        </View>
      </Modal>
    )
}
const styles = StyleSheet.create({

    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalView:{
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        } 
      },

  });