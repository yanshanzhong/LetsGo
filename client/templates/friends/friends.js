Template.friends.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('products');
  }.bind(this));
};

Template.friends.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.friends.helpers({
  products: function () {
    return Products.find({}, {sort: {numberOfVotes: -1, name: -1}});
  }
});