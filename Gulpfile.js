var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/static/style/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('style/sass/**/*.scss',['styles']);
});
