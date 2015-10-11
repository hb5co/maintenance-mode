Package.describe({
  name: 'hb5:maintenance-mode',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Disable access to all content and functionality without logging in using as an administrator.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hb5co/maintenance-mode.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  // For adding packages and files to client and server.
  var both = ['client', 'server'];

  // Meteor core package dependencies.
  api.use([
    'ecmascript',
    'mongo'
    ], both);

  // Meteor community package dependencies.
  api.use(['alanning:roles@1.2.14'], both);

  // Required files for the server.
  api.addFiles([
    'lib/startup.js',
    'lib/methods/maintModeStatus.js',
    'lib/publications/maintMode.js'
    ], 'server');

  api.addFiles([
    'lib/collections/maintMode.js'
    ], both);
});

Package.onTest(function(api) {
});
