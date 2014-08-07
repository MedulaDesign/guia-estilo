//include gulp
var gulp = require('gulp');

//include plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var livereload = require('gulp-livereload');

// Styles
gulp.task('sass', function() {
  return gulp.src(['./sass/*.scss'])
  .pipe(sass({
    errLogToConsole: true,
    style: 'expanded'
  }))
  .pipe(autoprefixer(["last 3 versions", "> 0.5%", "ie 8", "ie 7", "Android 2"]))
  //.pipe(minifycss())
  .pipe(gulp.dest('css'))
  .pipe(livereload());
});


gulp.task('watch', function() {

  gulp.watch('./sass/**/*.scss', ['sass']);

});
