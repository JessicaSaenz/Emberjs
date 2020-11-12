import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @attr image;
  @attr title;
  @attr author;
  @attr price;
  @attr synopsis;

  @belongsTo('author') author;
}