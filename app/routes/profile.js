import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('loans');
  }
  // model () {
  //   return this.get('store').findAll('user');
  // },
});
