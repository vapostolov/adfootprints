var gulp = global.gulp;
var fs = require('fs');
var gutil = require("gulp-util");
var webpack = require("webpack");
var path = require('path');
var es = require('event-stream');

gulp.task('web-lint', function () {
    // ...
});

gulp.task('copy-static', ['web-lint'], function () {
    // ...
});
gulp.task('compress-images', ['copy-static'], function () {
    // ...
});

var buildTasks = ['web-lint', 'copy-static', 'compress-images'];

gulp.task('watch-static', ['copy-static', 'compress-images'], function () {
    gulp.watch(['./web/static/**/*'], ['copy-static', 'compress-images']);
});

var webpackTasks = [];
var jadeTasks = [];
var stylusTasks = [];

[
    { name: 'landing', type: 'static' },
    { name: 'admin', type: 'dynamic' }
].forEach(function (page) {
    var element = page.name, type = page.type;
    var innerWatchGulp = 'innerWatch-' + element, watchGulp = 'watch-' + element, buildGulp = 'build-' + element, stylusGulp = 'stylus-' + element, koGulp = 'ko-' + element, jadeGulp = 'jade-' + element, webpackGulp = 'webpack-' + element;
    var config = {
        // ...
    };
    if (!global.argv.development) {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
        config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    }
    gulp.task(webpackGulp, function (callback) {
        webpack(config, function (err, stats) {
            // ...
        });
    });
    webpackTasks.push(webpackGulp);

    gulp.task(stylusGulp, function (cb) {
        // ...
    });
    stylusTasks.push(stylusGulp);

    gulp.task(jadeGulp, function (cb) {
        // ...
    });
    jadeTasks.push(jadeGulp);

    gulp.task(buildGulp, [stylusGulp, jadeGulp, koGulp, webpackGulp], function (cb) { cb(); });
    buildTasks = buildTasks.concat(stylusGulp, jadeGulp, koGulp, webpackGulp);

    gulp.task(innerWatchGulp, function () {
        gulp.watch(['./web/abstract/**/*.styl', './web/' + element + '/**/*.styl'], [stylusGulp]);

        gulp.watch(['./web/abstract/**/*.jade', './web/' + element + '/**/*.jade'], [jadeGulp, koGulp]);

        gulp.watch(['./node_modules/*/package.json', './web/abstract/**/*.js', './web/' + element + '/**/*.js', './models/**/*.js'], [webpackGulp]);

        var allBuildFiles = ['./dist/www/**/*', './web/build/**/*'];
        return gulp.watch(allBuildFiles, function (evt) {
            global.plugins.livereload.changed(evt.path);
        });
    });
    gulp.task(watchGulp, [stylusGulp, jadeGulp, koGulp, webpackGulp, 'watch-static'], function (callback) {
        global.developmentMode = true;
        global.plugins.livereload.listen();
        global.runSequence(
            stylusGulp, jadeGulp, koGulp, webpackGulp, innerWatchGulp, callback
        );
    });
});

exports.buildTasks = buildTasks;
exports.testTasks = [];

gulp.task('innerWatch-web', function () {
    gulp.watch(['./web/**/*.styl'], stylusTasks);

    gulp.watch(['./web/**/*.jade'], jadeTasks);

    gulp.watch(['./node_modules/*/package.json', './web/**/*.js', './models/**/*.js'], webpackTasks);

    var allBuildFiles = ['./dist/www/**/*', './web/build/**/*'];
    return gulp.watch(allBuildFiles, function (evt) {
        global.plugins.livereload.changed(evt.path);
    });
});
gulp.task('watch-web', buildTasks.concat('watch-static'), function (callback) {
    global.plugins.livereload.listen();
    global.runSequence(
        stylusTasks, jadeTasks, webpackTasks, 'innerWatch-web', callback
    );
});