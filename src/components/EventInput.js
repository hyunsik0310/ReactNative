import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {
    const [text, setText] = useState('');
    
    const _onChangeText = text => setText(text);
    // 変更されたTEXTをsetTextに格納
    //const _onChange = event => setText(event.nativeEvent.text);

    return (
        <View>
            <Text style={{ margin: 10, fontSize:30 }}>text: {text}</Text>
            <TextInput
                style={{
                    borderWidth: 1, padding: 10, fontSize: 20
                }}
                placeholder="Enter a text..."
                onChangeText={_onChangeText}
                // 変更したイベントを格納
                //onChange={_onChange}
            />
        </View>
    );  
};

export default EventInput;