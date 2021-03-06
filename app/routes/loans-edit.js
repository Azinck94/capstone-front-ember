import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('loan')
  },
  actions: {
    updateLoan(loan){
      loan.save()
      .then((loan) => {
        this.transitionTo('loans');
      })
      .then(() => {
        this.get('flashMessages')
        .success('Successfully updated a loan!');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
