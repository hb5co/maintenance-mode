// Declare collections.
MaintMode = new Mongo.Collection('maintenance-mode');

// Startup functions.
Meteor.startup(function () {
  // Add default maintenance mode document if missing.
  if (!MaintMode.find().count()) {
    MaintMode.insert( { status: false, message: "This site is currently under maintenance. We should be back shortly. Thank you for your patience." } );
  }
});

