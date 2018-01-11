import React from 'react';
import { View } from 'react-native';
import Amplify, { withAuthenticator } from 'aws-amplify-react-native';
import aws_exports from './src/aws-exports';
import Header from "./src/Components/Header";
import MusicList from "./src/Components/MusicList";

Amplify.configure(aws_exports);

class App extends React.Component {
  render() {
    return (
            <View style={{ flex: 1 }}>
                <Header headerText={'playlistify'}/>
                <MusicList/>
            </View>
    );
  }
}

export default withAuthenticator(App);


