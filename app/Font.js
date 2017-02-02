import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Font extends Component {
  render() {
    // const hello = {fontFamily: this.props.font}
    return (
      <Text style={{fontFamily: this.props.font}}>{this.props.font}</Text>
    )
  }
}

