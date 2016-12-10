var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('public/static/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/static/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('public/static/scss/**/*.scss',['styles']);
});
