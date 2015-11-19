var gulp = require('gulp');

gulp.task('scripts', function(){
	var concat = require('gulp-concat');
	var uglify = require('gulp-uglifyjs');

	gulp
		.src('./assets/angular/**/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public'));
});


gulp.task('watch', function(){
	gulp.watch('./assets/angular/**/*.js', ['scripts'])

});


gulp.task('default', [
	'scripts',
	'watch'
]);