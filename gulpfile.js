var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require ('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import')
var mixins = require('postcss-mixins');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	console.log("hooray")
} );


gulp.task('html', function() {
	console.log("image if i could use gulp really well :P!")
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString);
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/style'));
})


gulp.task('watch', function() {

	browserSync.init ({
		server: {
			baseDir: "app"
		}
	});


	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/css/style.css', function() {
		browserSync.reload();
	});


	//watch('./app/css/style.css', function() {
   	//	gulp.start('cssInject');

//  });

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./temp/style/style.css')
	.pipe(browserSync.stream());
});