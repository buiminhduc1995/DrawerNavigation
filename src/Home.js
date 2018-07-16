import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';


const { width } = Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Abc')}>
                       <Text>OpenDrawer</Text>
                    </TouchableOpacity>
                
            </View>
        );
    }
}
