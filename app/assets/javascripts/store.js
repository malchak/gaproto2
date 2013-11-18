// http://emberjs.com/guides/models/defining-a-store/

App.Store = DS.Store.extend({
  adapter: DS.ActiveModelAdapter.create()
});

App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
	namespace: 'api/v1'
});