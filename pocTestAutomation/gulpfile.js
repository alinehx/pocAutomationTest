'use strict';

var gulp = require('gulp'), 
  jasmine = require('gulp-jasmine'),
  webserver = require('gulp-webserver');


var pathTest = 'test/**/*.js';

gulp.task('default', ['serve']);

gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      fallback: 'index.html'
    }));
});
gulp.task('test', function () {
  gulp.src(pathTest)
    .pipe(jasmine());	
});