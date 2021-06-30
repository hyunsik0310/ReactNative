import React from 'react';
import { Text, View, Button } from 'react-native';
import Mybutton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* EventButton(press event)コンポネント実行 */}
            <EventButton />

            {/* EventInput(change event)コンポネント実行 */}
            <EventInput />

            {/* Counterコンポネント実行 */}
            {/* <Counter /> */}

            {/* MyButtonコンポネント実行 */}
            {/* <Text style={{ 
                fontSize:30,
                marginBottom:10,
             }}
            >
                Props
                </Text>
               <Mybutton title="Button" onPress={() => alert('props')} />
               <Mybutton title="Button"onPress={() => alert('chlidren')}>Children Props</Mybutton>
               <Mybutton onPress = {() => alert('default')} /> */}
            {/* standard button */}
            {/* <Button title="Button" onPress={() => alert('Click !!!')} /> */}
        </View>
    );
};

export default App;