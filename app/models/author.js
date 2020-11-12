import Model, { attr, hasMany } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr name;
  @attr lastname;
  @attr age;

  get fullName() {
    return `${this.name} ${this.lastname}`;
  }

  @hasMany('book') books;
  
}