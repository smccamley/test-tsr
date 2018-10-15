import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { connect } from 'react-redux';
import { getBooks } from './actions'

class Loader extends React.Component {

  constructor(props) {
    super(props);
    this.props.getBooks()
  }

  render() {
    if (!this.props.books) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default connect(
  state => ({ books: state.books }),
  { getBooks }
)(Loader)
