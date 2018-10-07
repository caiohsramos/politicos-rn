import React from 'react';
import { View } from 'react-native';
import { Card, SocialIcon, Text, Divider } from 'react-native-elements';
import { WebBrowser } from 'expo';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };
  
  _handleGitPress = () => {
    WebBrowser.openBrowserAsync(
      'https://gitlab.com/caiohsramos'
    );
  };

  _handleFacebookPress = () => {
    WebBrowser.openBrowserAsync(
      'https://facebook.com/caiohsramos'
    );
  };

  render() {
    return  (
      <Card title="React Native é daora">
        <Text>Feito em 30 minutos por Caio Ramos</Text>
        <Divider />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <SocialIcon type='gitlab' onPress={this._handleGitPress} />
          <SocialIcon type='facebook' onPress={this._handleFacebookPress} />
        </View>
      </Card>
    )
  }
}
