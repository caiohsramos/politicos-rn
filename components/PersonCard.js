import React from 'react';
import { Card, Badge } from 'react-native-elements'
import { View } from 'react-native'

export default class PersonCard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{bottom: 20}}>
               <Card title={this.props.name} image={this.props.picture}>
                    <Badge value={this.props.party} />
               </Card>
            </View>
        )
    }
}