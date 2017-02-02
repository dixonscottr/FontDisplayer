import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  AlertIOS,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import fonts from '../fonts';

import Font from './Font';

export default class App extends Component {

  openLink = (link) => {
    console.log(link);
    Linking.canOpenURL(link).then(supported => {
      if(supported) {
        Linking.openURL(link);
      } else {
        AlertIOS.alert(`Error opening: ${link}`);
      }
    })
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.main}>
          <Text style={styles.welcome}>
            React Native fonts available on iOS
          </Text>
          <View style={styles.fontHolder}>
            <ScrollView>
              {fonts.map((font, i) => {
                  return <Font key={i} font={font} />
                })
              }
            </ScrollView>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Coded by <Text style={styles.link} onPress={this.openLink.bind(null, 'https://github.com/dixonscottr')}>Scott</Text> | Inspired by
            <Text style={styles.link} onPress={this.openLink.bind(null, 'https://github.com/dabit3/react-native-fonts')}> this project</Text>
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#880D1E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 40,
    color: 'white'
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
    color: 'white',
    margin: 5
  },
  fontHolder: {
    margin: 10,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
    overflow: 'hidden',
    flex: 1
  }
});