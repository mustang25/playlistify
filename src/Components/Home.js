// Import libraries
import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Make a component

class Home extends Component {

    render() {
        console.log(this);
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    },
});

// Make the component available to other parts of the app
export default Home;
