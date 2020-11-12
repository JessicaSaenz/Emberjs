import Component from '@glimmer/component';

export default class BooksFilterComponent extends Component {
  get results() {
    let { books, query } = this.args;
    if (query) {
      books = books.filter(book => book.title.includes(query));
    } 

    return books;
  }
}