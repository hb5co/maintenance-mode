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
  api.use('ecmascript');
  api.use('alanning:roles@1.2.14', ['client', 'server']);
  api.addFiles('maintenance-mode.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hb5:maintenance-mode');
  api.addFiles('maintenance-mode-tests.js');
});
