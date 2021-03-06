import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  titleToken() {
    return this.l10n.t('Create');
  },
  model() {
    return this.get('store').createRecord('discount-code', {
      event   : this.modelFor('events.view'),
      usedFor : 'ticket'
    });
  }
});
