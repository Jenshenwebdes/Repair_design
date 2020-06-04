const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done){
  console.log('Привет мир!');
  done();
})

//Static Server
gulp.task('browser-sync', function(){
    browserSync.init({
        server:{
            baseDir:"./"
        }
    });
    /*gulp.watch("app/scss/*.scss", ['sass']);*/
    gulp.watch("./*.html").on('change', browserSync.reload);
});