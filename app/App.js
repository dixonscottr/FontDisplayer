import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {

    linkToFontPage = () => {
      Linking.canOpenURL('https://github.com/dabit3/react-native-fonts').then(supported => {
          if (supported) {
            Linking.openURL('https://github.com/dabit3/react-native-fonts');
          } else {
            AlertIOS.alert('Error opening: ' + this.props.url);
          }
        });
    };

    linkToGitHub = () => {
      Linking.canOpenURL('https://github.com/dixonscottr').then(supported => {
        if (supported) {
          Linking.openURL('https://github.com/dixonscottr');
        } else {
          AlertIOS.alert('Error opening: ' + this.props.url);
        }
      });
    };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.welcome}>
            FontDisplayer
          </Text>
          <Text style={styles.instructions}>
            instructions go here
          </Text>
        </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Coded by <Text style={styles.link} onPress={this.linkToGitHub}>Scott</Text> | Inspired by
              <Text style={styles.link} onPress={this.linkToFontPage}> this project</Text>
            </Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 40,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  },
  main: {
    flex: 0.95
  },
  footer: {
    flex: 0.05,
    alignItems: 'center'
  },
  footerText: {
  }
});