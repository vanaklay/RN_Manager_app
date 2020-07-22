import React from 'react';
import { 
    Text, View, TouchableWithoutFeedback, 
    StyleSheet
    } from 'react-native';

import { CardItem } from './CardItem';

const TouchableList = ({ name, shift, phone, onPress }) => {
    
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
            <CardItem style={{ height: 40 }}>
                <Text style={styles.textStyle}>{name}</Text>
                <Text style={styles.textStyle}>{phone}</Text>
                <Text style={styles.textStyle}>{shift}</Text>
            </CardItem>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18, 
        alignSelf: 'center', 
        marginHorizontal: 5, 
        flex: 1
    }
});

export { TouchableList };
