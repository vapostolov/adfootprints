var gulp = global.gulp;

var Tail = require('tail').Tail;
var logFile = 'forever.log';
var errFile = 'forever.err';

gulp.task('server-lint', function () {
    return gulp.src('./server/*.js')
        .pipe(global.plugins.eslint())
        .pipe(global.plugins.eslint.format())
        .pipe(global.plugins.eslint.failOnError());
});

gulp.task('server-coverage', function (cb) {
    return gulp.src(['./server/**/*.js'])
        .pipe(global.plugins.istanbul())
        .on('end', function () {
            gulp.src(['test/server/*.js'])
                .pipe(global.plugins.plumber())
                .pipe(global.plugins.mocha())
                .pipe(global.plugins.istanbul.writeReports('./dist/coverage/server'));
        });
});

exports.buildTasks = ['server-lint', 'server-coverage'];
exports.testTasks = [];

var exec = require('child_process').exec, child;
function execute(operation, callback) {
    // https://stackoverflow.com/a/25914705/6376260
    child = exec((/^win/.test(process.platform) ? '' : './node_modules/.bin/') + 'forever ' + operation + ' -o ' + logFile + ' -e ' + errFile + ' ./server/single.js' + (global.developmentMode ? ' --development' : ''), function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        if (callback)
            callback(error);
    });
}

function readTail(file) {
    var tail = new Tail(file);

    tail.on("line", function (data) {
        console.log(data);
    });

    tail.on("error", function (error) {
        console.log('ERROR: ', error);
    });
}

gulp.task('watch-server', function () {
    execute('start');

    var watcher = gulp.watch(['./server/**/*.js'], exports.buildTasks);
    watcher.on('change', function (event) {
        execute('restart');
    });

    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
        'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ].forEach(function (element, index, array) {
        process.on(element, function () {
            execute('stop', function () {
                process.exit(1);
            });
        });
    });

    readTail(logFile);
    readTail(errFile);
});