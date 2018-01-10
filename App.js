import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { withAuthenticator } from 'aws-amplify-react-native';
import aws_exports from './src/aws-exports';
import Header from "./src/Components/Header";
import Home from "./src/Components/Home";
import MusicList from "./src/Components/MusicList";

Amplify.configure(aws_exports);

class App extends React.Component {
  render() {
    return (
            <View>
                <Header headerText={'playlistify'}/>
                <Home/>
                <MusicList/>
            </View>
    );
  }
}

export default (App);


