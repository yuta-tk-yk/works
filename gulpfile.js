var gulp = require('gulp');
var browsersync = require("browser-sync").create();
gulp.task('build-server', function (done) {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
    done();
    console.log('Server was launched');
});
gulp.task('watch-files', function(done) {
    gulp.watch("./*.html", gulp.task('browser-reload'));
    gulp.watch("css/*.css", gulp.task('browser-reload'));
    gulp.watch("css/*.scss", gulp.task('browser-reload'));
    gulp.watch("./*.js", gulp.task('browser-reload'));
    done();
    console.log(('gulp watch started'));
});
gulp.task('browser-reload', function (done){
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});
gulp.task('default', gulp.series('build-server', 'watch-files', function(done){
    done();
    console.log('Default all task done!');
}));