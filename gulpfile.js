// load the plugins
var gulp       = require('gulp');
var less       = require('gulp-less');
var minifyCSS  = require('gulp-minify-css');
var rename     = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('css', function() {
  
  return gulp.src('css/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(livereload());

});

gulp.task('html', function() {
  return gulp.src('public/app/views/**/*.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('css/style.less', ['css']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['watch']);

