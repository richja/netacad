var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	zip = require('gulp-zip');

// compress js files
gulp.task('uglify', function () {
	gulp.src(['myo.js','content.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// move rest of files to dist
gulp.task('move', function () {
	gulp.src(['*.png','manifest.json'])
		.pipe(gulp.dest('dist'));
});

// zip them all
gulp.task('zip', function () {
	gulp.src('dist/*')
		.pipe(zip('cisco.zip'))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['uglify','move','zip']);