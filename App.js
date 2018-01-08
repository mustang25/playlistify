import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, { withAuthenticator } from 'aws-amplify-react-native';
import aws_exports from './src/aws-exports';


Amplify.configure(aws_exports);

class App extends React.Component {
  render() {
    return (
        <Authenticator theme={MyTheme}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Authenticator>
    );
  }
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
