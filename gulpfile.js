var gulp = require('gulp');
// css
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
// optimising media queries is a bad idea
// js
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish'); // add color to jshint output
var include = require('gulp-include');
// css + js
// var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
// template
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

var paths = {
    sassSrc: 'source/sass/*.scss',
    watchSass:'source/sass/*/*.scss',
    jsSrc: 'source/js/*.js',
    jsComponents: 'source/js/*/*.js',
    jsPlugins: 'source/plugins/*.js',
    dist: 'app/'
};

// Production style
var inProduction = false;

var onError = function(err) {
    notify.onError({
      title:    "Gulp error in " + err.plugin,
      Error: "<%= error.message %>"
    })(err);
    this.emit('end');
};

gulp.task('sass', function () {
    if (!inProduction) {
        gulp.src(paths.sassSrc)
            .pipe(plumber({errorHandler: onError}))
            .pipe(sourcemaps.init())
                .pipe(sass())
                .pipe(autoprefixer({
                    browsers: ['> 1%', 'IE 7'], 
                    remove: true 
                }))
            .pipe(sourcemaps.write())
            // .pipe(gzip())
            .pipe(gulp.dest(paths.dist));
    } else {
        gulp.src(paths.sassSrc)
            .pipe(plumber({errorHandler: onError}))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(autoprefixer({
                browsers: ['> 1%', 'IE 7'], 
                remove: true 
            }))
        // .pipe(gzip())
        .pipe(gulp.dest(paths.dist));
    }
});

gulp.task('js',function() {
    if (!inProduction) { // not in production
        return gulp.src([paths.jsPlugins, paths.jsSrc])
            .pipe(plumber({errorHandler: onError}))
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            .pipe(include())
            .pipe(concat('all.js'))
            // .pipe(gzip())
            .pipe(gulp.dest(paths.dist));
    } else {
        return gulp.src([paths.jsPlugins, paths.jsSrc])
            .pipe(plumber({errorHandler: onError}))
            .pipe(include())
            .pipe(uglify())
            .pipe(concat('all.js'))
            // .pipe(gzip())
            .pipe(gulp.dest(paths.dist));
    }
});

gulp.task('nunjucks', function() {
    // Gets .html and .njk files in pages
    return gulp.src('source/nunjucks/pages/**/*.+(html|njk)')
    .pipe(plumber({errorHandler: onError}))
    // Adding data to Nunjucks
    .pipe(data(function() {
      return require('./source/json/data.json')
    }))

    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['source/nunjucks/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('app'));
});

gulp.task('watch',function() {
    gulp.watch(paths.sassSrc, ['sass']);
    gulp.watch(paths.watchSass, ['sass']);
    gulp.watch(paths.jsComponents, ['js']);
    gulp.watch(paths.jsSrc, ['js']);
    gulp.watch('source/nunjucks/**/*.*', ['nunjucks']);
});

// run sass + js watch for any more changes
gulp.task('default', ['sass', 'js', 'watch']);