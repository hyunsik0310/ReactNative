import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const Mybutton = props => {
    console.log(props);
    return (
        <TouchableOpacity
         style={{
             backgroundColor: '#3498db',
             padding:16,
             margin: 10,
             borderRadius: 8,
         }}
         onPress={() => props.onPress()}
         >
            <Text style = {{ color: 'white', fontSize: 24}}>{props.children || props.title}</Text>
        </TouchableOpacity>
    );
};

Mybutton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

Mybutton.defaultProps = {
    title: 'Button',
};

export default Mybutton;