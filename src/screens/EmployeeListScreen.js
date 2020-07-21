import _ from 'lodash';
import React, { useEffect } from 'react';
import { View, StyleSheet, 
        TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Feather } from '@expo/vector-icons';
import { dataFetch } from '../actions';

import { Spinner, TouchableList } from '../components/common';

const EmployeeListScreen = (props) => {
    const { navigation, dataFetch, employees } = props;
    useEffect(() => {
        dataFetch();
    }, []);
    

    const RenderContent = () => {
        if (employees.lentgh < 1) {
            return <Spinner />
        } else {
            return <FlatList 
                    data={employees}
                    keyExtractor={employee => employee.uid}
                    renderItem={({item}) => {
                        return <TouchableList 
                            name={item.name}
                            phone={item.phone}
                            shift={item.shift}
                            onPress={() => navigation.navigate('Edition', { item: item })}/>
                    }}
                />;
        }
    };

    return (
        <View style={styles.container}>
            <RenderContent />
        </View>
    );
};

EmployeeListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: { backgroundColor: '#eb5352' },
        headerRight: () =>
            <TouchableOpacity onPress={()=> navigation.navigate('Creation')} >
                <Feather name="plus" size={40} />
            </TouchableOpacity>
    }
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    const employees = _.map(state.dataFetch, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};
export default connect(mapStateToProps, { dataFetch })(EmployeeListScreen);