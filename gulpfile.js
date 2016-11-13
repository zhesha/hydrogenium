var gulp = require("gulp");
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
//var watch = require('gulp-watch');

gulp.task('default', function () {
    gulp.src('node_modules/phaser/build/phaser.min.js')
        .pipe(gulp.dest('.'));
    gulp.watch('js/**/*.js', ['build']);
});

gulp.task('build', function () {
    gulp.src('js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('.'))
});