// Method for checking maintenance mode status.
Meteor.methods({
  MaintModeStatus: function () {
    return MaintMode.findOne();
  }
});
