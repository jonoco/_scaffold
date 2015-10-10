var gulp  = require('gulp'),
gutil     = require('gulp-util'),
webserver = require('gulp-webserver'),
minifyCSS = require('gulp-minify-css'),
rename    = require('gulp-rename'),
sass      = require('gulp-sass');


gulp.task('js', function() {
  gulp.src('builds/development/src/js/**/*')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('builds/development/dist/js'));
});

gulp.task('html', function() {
  gulp.src('builds/development/src/*.html')
});

gulp.task('sass', function() {
  gulp.src('builds/development/components/src/sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('builds/development/dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('builds/development/src/js/**/*', ['js']);
  gulp.watch('builds/development/src/sass/*.scss', ['sass']);
  gulp.watch([
    'builds/development/src/index.html',
    'builds/development/src/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/development/dist/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'sass', 'webserver']);
