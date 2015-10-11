Meteor.startup(function() {

  // Here, we make sure that our collection MaintMode is available and is
  // actually a Mongo collection. We could just do if ( MaintMode ) here, but
  // this allows us to be certain our variable is a collection. Hat tip to
  // @chicagogrooves (Dean Radcliffe) for this technique!
  
  if ( typeof MaintMode == "object" && MaintMode.constructor == Mongo.Collection ) {

    // Add default maintenance mode document if missing.
    if (!MaintMode.find().count()) {
      MaintMode.insert( { status: false, message: 'This site is currently under maintenance. We should be back shortly. Thank you for your patience.' } );
    }
  }
});
