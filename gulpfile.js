var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("hooray")
} );


gulp.task('html', function() {
	console.log("image if i could use gulp really well :P!")
});


gulp.task('style', function() {
	return gulp.src('./app/css/style.css').pipe(gulp.dest('./app/temp/style'))
});


gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html');
	})

	watch('./app/css/style.css', function() {
   		gulp.start('style');
  });

})