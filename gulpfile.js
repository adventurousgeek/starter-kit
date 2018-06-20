'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var prettify = require('gulp-prettify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Compile & Generate Style File
gulp.task('styles', function () {
    gulp.src('./src-assets/scss/style.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'})) //Later on
        .pipe(gulp.dest('./'));
});


// gulp.task('woocommerce', function () {
//     gulp.src('../../wp-content/plugins/woocommerce/assets/css/woocommerce.scss')
//         .pipe(sass())
//         .pipe(cleanCSS({compatibility: 'ie8'})) //Later on
//         .pipe(gulp.dest('../../wp-content/plugins/woocommerce/assets/css/'));
//        // .pipe(gulp.dest('../../wp-content/themes/mall-road/'));
// });

// Compile & Generate Javscript File
gulp.task('scripts', function() {
    return gulp.src([

        //jQuery
        //'javascripts/vendor-components/jquery/jquery.1.12.4.min.js',

        //Bootstrap Components

        //'javascripts/bootstrap-components/affix.js',
        //'javascripts/bootstrap-components/alert.js',
        'src-assets/javascripts/bootstrap-components/button.js',
        'src-assets/javascripts/bootstrap-components/carousel.js',
        'src-assets/javascripts/bootstrap-components/collapse.js',
        'src-assets/javascripts/bootstrap-components/dropdown.js',
        'src-assets/javascripts/bootstrap-components/modal.js',
        //'javascripts/bootstrap-components/popover.js',
        //'javascripts/bootstrap-components/scrollspy.js',
        'src-assets/javascripts/bootstrap-components/tab.js',
        //'javascripts/bootstrap-components/tooltip.js',
        'src-assets/javascripts/bootstrap-components/transition.js',




        //Common Components
        'src-assets/javascripts/common-components/global.js',

        //Components
        'src-assets/javascripts/components/home.js',

    ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe( gulp.dest('./assets/js/'));


});


// Watch If SCSS File Changes
gulp.task('styles:watch', function () {
    gulp.watch('./src-assets/scss/**/*.scss', ['styles']);
});

// Watch If Javascript File Changes
gulp.task('scripts:watch', function () {
    gulp.watch('./src-assets/javascripts/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts' , 'styles:watch' , 'scripts:watch']);