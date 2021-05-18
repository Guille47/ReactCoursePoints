import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native'

export default (title, ...rest) => {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput {...rest}/>
        </View>
    )
}