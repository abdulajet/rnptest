import React, { Component } from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';
import {
  Text,
  View
} from 'react-native';

class App extends Component {
  componentDidMount() {
    request(PERMISSIONS.ANDROID.RECORD_AUDIO);
  }

  render() {
    return (
      <View>
          <Text>
            Hi
          </Text>
        </View>
    );
  }
}

export default App;
