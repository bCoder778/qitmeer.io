var gulp = require('gulp'),
    uglify = require('gulp-uglify'), // 压缩js文件
    less = require('gulp-less'), // 编译less
    cleanCSS = require('gulp-clean-css'), // 压缩css文件
    rename = require('gulp-rename'); // 文件重命名

gulp.task('scripts', async () => {
    gulp.src('./dev/js/index.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'))
    gulp.src('./dev/js/pagination.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'))
    gulp.src('./dev/js/canvas.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'))
});

gulp.task('less', async () => {
    gulp.src('./dev/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('dev/less'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
});

// gulp.task('watch', function () {
//     gulp.watch('dev/less/*.less', ['less']);
//     gulp.watch('dev/js/*.js', ['scripts']);
// });

gulp.task("watch", async () => {
    gulp.watch('dev/less/*.less', gulp.series('less'));
    gulp.watch('dev/js/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('scripts', 'less', 'watch'));
