import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons'

export default class App extends React.Component {

  state = {
    gameState:  [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    currentPlayer: 1
  }

  initialzeGame = () => {
    this.setState({gameState:
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    })
  }

  componentDidMount() {
    this.initialzeGame()
  }

  renderIcon(row, col) {
    let value = this.state.gameState[row][col]
    switch (value)
    {
      case 1: return <Icon name='circle-outline' size={50} />
      case -1: return <Icon name='circle-outline' size={50} />
      default: return <View />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, {borderTopWidth: 0}]}>
            {this.renderIcon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, {borderRightWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0,2)}
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.tile, {borderLeftWidth: 0}]}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile]}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, {borderRightWidth: 0}]}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
          {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, {borderBottomWidth: 0}]}>
          {this.renderIcon(2,2)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, {borderRightWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    width: 100,
    height: 100,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
