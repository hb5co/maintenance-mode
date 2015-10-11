Router.route("maintenance-mode", {
  path: "/maintenance-mode",
  template: "maintenance-mode",
  subscriptions: function() {
    return Meteor.subscribe('maintMode');
  }
});
