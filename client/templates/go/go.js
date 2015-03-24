Template.go.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('products');
  }.bind(this));
};

Template.go.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.go.helpers({
  products: function () {
    return Products.find({}, {sort: {numberOfVotes: -1, name: -1}});
  }
});
