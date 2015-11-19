var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var sourcemaps = require('gulp-sourcemaps');

var scripts = [
		'./angular/app.js',
		'./angular/**/*.controller.js'
	];

gulp.task('scripts', function(){
	

	gulp
		.src(scripts)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('.'));
});


gulp.task('watch', function(){
	gulp.watch(scripts, ['scripts'])

});

gulp.task('default', [
	'scripts',
	'watch'
]);
	
