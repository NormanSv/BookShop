var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
gulp.task('serve', ['sass'], function() {
browserSync.init({
server: "src/"
});
gulp.watch("sass/*.sass", ['sass']);
gulp.watch("*.html").on('change', browserSync.reload);
});
gulp.task('sass', function() {
return gulp.src("src/sass/*.sass")
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest("src/css"))
.pipe(browserSync.stream());
});