import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Book from '../components/Book'
import { connect } from 'react-redux';


class BooksScreen extends React.Component {
  static navigationOptions = {
    title: 'Books'
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.books.map(book =>
          <Book key={book.id} book={book} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default connect(state => ({ books: state.books }))(BooksScreen)
