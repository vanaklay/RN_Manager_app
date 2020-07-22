import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline , visible }) => {
    return (
        <Modal 
            
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
            >
            <View style={styles.containerStyle}>
                <CardItem style={styles.cardItemStyle}>
                    <Text style={styles.textStyle}>{children}</Text>
                </CardItem>
                <Button onPress={onAccept}>Oui</Button>
                <Button onPress={onDecline}>Non</Button>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardItemStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

export { Confirm };
