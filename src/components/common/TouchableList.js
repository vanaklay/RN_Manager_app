import React from 'react';
import { Text, View, TouchableWithoutFeedback,
        StyleSheet
         } from 'react-native';

import { CardItem } from './CardItem';

const TouchableList = ({ name, phone, shift ,onPress }) => {
    
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
            <CardItem style={{ height: 30 }}>
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Text>{shift}</Text>
            </CardItem>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({});

export {TouchableList};
