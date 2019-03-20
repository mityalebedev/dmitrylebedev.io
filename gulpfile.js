const  gulp  = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();

function reload() {
    browserSync.reload();
}

function styles() {
    return gulp.src('scss/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch(['scss/**/*.scss'], styles, reload);
    watch(['index.html'], reload);
}

exports.styles = styles;
exports.watch = watchFiles;
