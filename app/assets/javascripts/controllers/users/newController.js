App.UsersNewController = Ember.ObjectController.extend({
	actions: {
		save: function(){
			var email = this.get('email');
			var password = this.get('password');
			var passwordConfirmation = this.get('passwordConfirmation');
			
			var user = this.store.createRecord('user', {
				email: email,
				password: password,
				passwordConfirmation: passwordConfirmation,
			});
			user.save();
			this.set('email', '');
			this.set('password', '');
			this.set('passwordConfirmation', '');
			this.transitionToRoute('index');
		},

		cancel: function(){
			this.get('content').deleteRecord('user');
			this.transitionToRoute('index');
		}
	}
})