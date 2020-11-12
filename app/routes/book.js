import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class BookRoute extends Route {
  @service store;

  async model(params) {
    const {
      book_id
    } = params;
    const data  = await this.store.findAll('book');
    const authors  = await this.store.findAll('author');
    const book = data.find(({
      id
    }) => id === book_id);
    return book;
  }
}