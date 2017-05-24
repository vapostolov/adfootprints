var argv = global.argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var gulp = global.gulp = require('gulp'),
    plugins = global.plugins = require("gulp-load-plugins")({ scope: ['devDependencies'] });

var runSequence = global.runSequence = require('run-sequence');
var fs = require('fs');
var rimraf = require('rimraf');

/** gulp --development */
global.developmentMode = (process.env.NODE_ENV === 'development') || global.argv.development;

var server = require('./gulp/server');
gulp.task('build-server', function (callback) {
    runSequence(
        server.buildTasks, callback
    );
});

gulp.task('clean-web', function (callback) {
    if (fs.existsSync('./dist/'))
        rimraf('./dist/', callback);
    else callback();
});

var web = require('./gulp/web');
gulp.task('build-web', function (callback) {
    runSequence(
        'clean-web', web.buildTasks, callback
    );
});

gulp.task('build', function (callback) {
    runSequence(
        server.buildTasks, web.buildTasks, callback
    );
});

gulp.task('test', ['build'], function (callback) {
    global.developmentMode = true;
    runSequence(
        server.testTasks, web.testTasks, callback
    );
});

gulp.task('watch', function (callback) {
    global.developmentMode = true;
    runSequence(
        'watch-server', 'watch-web', callback
    );
});

gulp.task('default', ['build']);