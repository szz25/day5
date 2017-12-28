var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
gulp.task('connect', function() {
    connect.server({
        port: 8080,
        livereload: true
    })
});
gulp.task('minify', function() {
    gulp.src('./css/*.css')
        .pipe(concat('ys.css'))
        .pipe(minify())
        .pipe(gulp.dest('./css/'))
})
gulp.task('watch', function() {
    gulp.watch('index.html')
})
gulp.task('default', ['connect', 'watch', 'minify'])