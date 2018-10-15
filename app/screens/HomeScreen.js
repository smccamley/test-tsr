import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  viewBooks = () => {
    const { navigate } = this.props.navigation;
    navigate('Books')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.viewBooks} style={styles.touchableContainer}>
          <Text style={styles.containerText}>Grab the</Text>
          <Text style={styles.containerText}>MR. MEN</Text>
          <Text style={styles.containerText}>collection</Text>
          <Text style={styles.containerText}>today</Text>

          <Image
            source={require('../assets/images/icon-read-1.png')}
            style={styles.welcomeImage}
          />

        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  touchableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerText: {
    fontFamily: 'Futura',
    fontSize: 45,
    fontWeight: '800',
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeImage: {
    width: 130,
    height: 150,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
