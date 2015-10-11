Meteor.publish('maintMode', function() {
  var maintMode = MaintMode.find();
  
  if ( maintMode ) {
    return maintMode;
  }

  return this.ready();
});