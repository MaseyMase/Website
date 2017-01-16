var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require ('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	console.log("hooray")
} );


gulp.task('html', function() {
	console.log("image if i could use gulp really well :P!")
});


gulp.task('style', function() {
	return gulp.src('./app/css/style.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/style'))
});


gulp.task('watch', function() {

	browserSync.init ({
		server: {
			baseDir: "app"
		}
	});


	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/css/style.css', function() {
   		gulp.start('style');
  });

});