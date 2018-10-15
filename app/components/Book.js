import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { selectBook, addToBasket } from '../actions'

class Book extends React.Component {
  state = {
    showInfo: false
  }
  info = () => {
    this.setState({ showInfo: true })
  }
  buy = () => {
    const { book, addToBasket } = this.props
    addToBasket(book)
  }
  render() {
    const { title, imageUrl, info } = this.props.book
    return (
      <View style={styles.bookContainer}>
        <Text style={styles.containerText}>
          {title}
        </Text>
        <Image
          source={{ uri: imageUrl }}
          style={styles.bookImage}
        />
        <Image
          source={require('../assets/images/by-roger-hargreaves.png')}
          style={styles.bookImageBy}
        />

        {this.state.showInfo &&
          <Text style={styles.infoText}>
            {info}
          </Text>
        }
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.info}>
            <View style={[styles.button, styles.infoButton]}>
              <Text style={[styles.containerText, styles.buttonText]}>Info</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.buy}>
            <View style={[styles.button, styles.buyButton]}>
              <Text style={[styles.containerText, styles.buttonText]}>Buy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default connect(null, { selectBook, addToBasket })(Book)

const styles = StyleSheet.create({
  book: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  bookContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.25)',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  containerText: {
    fontFamily: 'Futura',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center'
  },
  bookImage: {
    width: 200,
    height: 130,
    marginTop: 10,
    marginBottom: 10
  },
  infoText: {
    margin: 15
  },
  bookImageBy: {
    width: 150,
    height: 25,
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  buttonText: {
    color: 'rgb(255,255,255)',
    fontSize: 16
  },
  button: {
    padding: 15,
    borderWidth: 1,
    margin: 15
  },
  infoButton: {
    backgroundColor: 'rgb(0,0,255)',
    borderColor: 'rgba(0,0,255,0.3)'
  },
  buyButton: {
    backgroundColor: 'rgb(0,255,0)',
    borderColor: 'rgba(0,255,0,0.3)'
  }
});