import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return this.store.findRecord('org', 'ccv-status'); // or any other user
  }
}
