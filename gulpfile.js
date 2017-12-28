var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
gulp.task('connect', function() {
    connect.server({
        port: 8080,
        livereload: true
    })
});
// gulp.task('webserver', function() {
//     gulp.src('.')
//         .pipe(webserver({
//             host: 'localhost',
//             port: 8080,
//             middleware: function(req, res, next) {
//             }
//         }))
// })
gulp.task('watch', function() {
    gulp.watch('index.html')
})
gulp.task('default', ['connect', 'watch'])