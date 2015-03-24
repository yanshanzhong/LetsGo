
Router.route('/', {
  name: 'go'
});

Router.route('/friends', {
  name: 'friends'
});

Router.route('/rank', {
  name: 'rank'
});

Router.route('/me', {
  name: 'me'
});

Router.route('/trending', {
  name: 'trending'
});

Router.route('/recent', {
  name: 'recent'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});
