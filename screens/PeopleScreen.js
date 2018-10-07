import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PersonCard from '../components/PersonCard'

const people = [
  {
    name: 'Alvaro Dias',
    picture: require('../assets/images/alvaro-dias.jpg'),
    party: '19',
  }, {
    name: 'Ciro Gomes', 
    picture: require('../assets/images/ciro-gomes.jpg'),
    party: '12',
  }, {
    name: 'Geraldo Alckmin', 
    picture: require('../assets/images/geraldo-alckmin.jpg'),
    party: '45',
  }, {
    name: 'Guilherme Boulos', 
    picture: require('../assets/images/guilherme-boulos.jpg'),
    party: '50',
  }, {
    name: 'Henrique Meirelles', 
    picture: require('../assets/images/henrique-meirelles.jpg'),
    party: '15',
  }, {
    name: 'Bonoro', 
    picture: require('../assets/images/jair-bolsonaro.jpg'),
    party: '12',
  }, {
    name: 'Joao Amoedo', 
    picture: require('../assets/images/joao-amoedo.jpg'),
    party: '30',
  }, {
    name: 'Fernando Haddad', 
    picture: require('../assets/images/fernando-haddad.jpg'),
    party: '13',
  }, {
    name: 'Marina Silva', 
    picture: require('../assets/images/marina-silva.jpg'),
    party: '18',
  }
];

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Candidatos',
  };

  _renderPeople = () => (
    people.map((u,i) => (
      <View key={i}>
        <PersonCard name={u.name} picture={u.picture} party={u.party}/>
      </View>
    ))
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderPeople()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
