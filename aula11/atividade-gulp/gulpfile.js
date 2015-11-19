var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');


//gulp.src faz um stream de leitura, com base em um glob
// .pipe // faz o processamento desse stream
// gulp.dest // escreve p stream em algum path
// . watch

gulp.task('default', function() {

var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
	gulp
		.src('./assets/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public'));
});

gulp.task('watch', function()	{
	gulp.watch('*.js', ['deafult'], 'scripts')
});

