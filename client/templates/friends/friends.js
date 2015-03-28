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
var postsData = [
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: 'Meteor精益创业孵化营(32)'
  },
  {
    title: '孵化营周末课程通知群(30)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  },
  {
    title: '【LetsGo一起跑】项目组(5)'
  }
  ,
  {
    title: '【LetsGo一起跑】项目组(5)'
  }
  ,
  {
    title: '【LetsGo一起跑】项目组(5)'
  }
  ,
  {
    title: '【LetsGo一起跑】项目组(5)'
  }
];
Template.friends.helpers({
  posts: postsData
});