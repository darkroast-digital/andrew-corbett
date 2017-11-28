const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const connect = require('gulp-connect-php');
const reload = browserSync.reload;
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const ant = require('postcss-ant');
const autoprefixer = require('autoprefixer');

var paths = {
	scss: './src/assets/scss/**/*.scss',
	es: './src/assets/js/*.js',
	css: './build/assets/css',
	php: './build/*.php',
	bundle: './build/assets/js/',
	js: './build/assets/js/bundle.js'
};

gulp.task('scripts', () => {
  return gulp.src([
    'src/assets/js/vendors/jquery-3.1.1.min.js',
    // 'src/assets/js/vendors/anime.min.js',
    // 'src/assets/js/vendors/googlemapsapi.js',
    // 'src/assets/js/vendors/gmaps.js',
    'src/assets/js/vendors/slick.min.js',
    'src/assets/js/vendors/TweenMax.min.js',
    'src/assets/js/vendors/ScrollMagic.min.js',
    'src/assets/js/vendors/jquery.ScrollMagic.min.js',
    'src/assets/js/vendors/animation.gsap.min.js',
    // 'src/assets/js/vendors/debug.addindicators.min.js',
    // 'src/assets/js/vendors/linemaker.js',
    'src/assets/js/components/componenets.js',
    'src/assets/js/components/form.js',
    'src/assets/js/main.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(paths.bundle))
    .pipe(notify({ message: "Scripts Done", onLast: true }));
});

gulp.task('sass', () => {
	
	var processors = [
		ant,
		autoprefixer
	]
	
	return gulp.src('./src/assets/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./build/assets/css'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('serve', ['sass', 'scripts'], () => {
	
	connect.server({
		port: '8080',
		base: './build'
	}, () => {
			browserSync({
				proxy: '127.0.0.1:8080'
			});
		
		gulp.watch(paths.scss, ['sass']);
		gulp.watch(paths.es, ['scripts']);
		gulp.watch(paths.php).on('change', reload);
	});
});

gulp.task('default', ['serve']);