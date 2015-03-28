Products.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId === doc.userId;
  },
  'remove': function(userId, doc) {
    return false;
  }
});

Comments.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId === doc.userId;
  },
  'remove': function(userId, doc) {
    return false;
  }
});

RunnerLocations.allow({
  'insert': function(userId, doc) {
    return true;
  },
  'update': function(userId, doc, fields, modifier) {
    return true;
  },
  'remove': function(userId, doc) {
    return true;
  }
});
