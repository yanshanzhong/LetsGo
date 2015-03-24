RunnerLocations = new Mongo.Collection("runnerLocations");
if (Meteor.isClient) {
  console.log("client");
  Template.trace.helpers({
    runnerLocations: function () {
      return RunnerLocations.find();
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  console.log("server");
}