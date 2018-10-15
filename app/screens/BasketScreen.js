import React from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import BasketItem from '../components/BasketItem'

class Basket extends React.Component {
  static navigationOptions = {
    title: 'Basket',
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    const { basket } = this.props
    return (
      <View>
        {basket &&
          <View>
            {this.props.basket.map((book, i) => <BasketItem key={i} book={book} id={i} />)}
          </View>
        }
        {!basket &&
          <View>
            <Text>You've not added anything to your basket yet...</Text>
          </View>
        }
      </View>
    )
  }
}

export default connect(state => ({ basket: state.basket }))(Basket)