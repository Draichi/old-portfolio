var gulp = require('gulp')
  ,uglify = require('gulp-uglify')
  ,cssmin = require('gulp-cssmin')
  ,jsonminify = require('gulp-jsonminify')
  ,clean = require('gulp-clean');

gulp.task('copy', ['clean'], function(){
  return gulp.src('src/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
  return gulp.src('dist')
  .pipe(clean());
});

gulp.task('build-js', function(){
  return gulp.src('dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-json', function(){
  return gulp.src('dist/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function(){
  return gulp.src('dist/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy'], function() {
  gulp.start(['build-js', 'build-json', 'build-css']);
});