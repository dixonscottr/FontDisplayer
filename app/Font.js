import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Font extends Component {

  render() {
    const font = this.props.font;
    const style = {
      fontFamily: font,
      fontSize: 19
    };
    let secondLine;
    if(font === "Bodoni Ornaments" || font === "BodoniOrnamentsITCTT") {
      secondLine = <Text style={{textAlign: 'center', fontStyle: 'italic'}}>({font})</Text>;
      style.fontSize = 15;
    }
    return (
      <View>
        <Text style={style}>{font}</Text>
        {secondLine}
      </View>
    )
  }
}

