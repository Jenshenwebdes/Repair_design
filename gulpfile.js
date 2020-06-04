const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


//Static Server

function bs(){
    serveSass();
    browserSync.init({
        server:{
            baseDir:"./"
        }
});
    /*gulp.watch("app/scss/*.scss", ['sass']);*/
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);

};

// Compile sass into CSS & auto-inject into browsers

function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;