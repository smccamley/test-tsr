import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { removeFromBasket } from '../actions'

class BasketItem extends React.Component {
  removeFromBasket = () => {
    const { removeFromBasket, id } = this.props
    removeFromBasket(id)

  }
  render() {
    const { title } = this.props.book
    return (
      <View>
        <Text>{title}</Text>
        <TouchableOpacity onPress={this.removeFromBasket}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { removeFromBasket })(BasketItem)