import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Linking,
  AlertIOS,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import fonts from '../fonts';

import Font from './Font';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      modalVisible: false,
      font: ''
    }
  }

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

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  showModal(font) {
    this.setState({font: font});
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.main}>
          <Text style={styles.welcome}>
            React Native fonts on iOS
          </Text>
          <Text style={styles.instructions}>Hold down on a font to see more</Text>
          <View style={styles.fontHolder}>
            <ScrollView>
              {fonts.map((font, i) => {
                  return <Font key={i} font={font} onLongPress={this.showModal.bind(this, font)} />
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
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={{textAlign: 'center', fontFamily: this.state.font, fontSize: 30}}>The quick brown fox jumped over the lazy brown dog</Text>
              <Text></Text>
              <Text style={{textAlign: 'center', fontFamily: this.state.font, fontSize: 30}}>THE QUICK BROWN FOX JUMPED OVER THE LAZY BROWN DOG</Text>
              <Button onPress={() => {
                this.setModalVisible(false)
              }}
              title="👋"
              >
            </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#880D1E'
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    marginTop: 30,
    color: 'white',
    fontFamily: 'System'
  },
  instructions: {
    textAlign: 'center',
    fontFamily: 'System',
    color: 'white'
  },
  main: {
    flex: 0.95
  },
  footer: {
    flex: 0.05,
    alignItems: 'center',
    margin: 5
  },
  footerText: {
    color: 'white',
    fontFamily: 'System'
  },
  fontHolder: {
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
    overflow: 'hidden',
    flex: 1
  },
  modal: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(38, 12, 12, 0.5)'
  },
  modalView: {
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});