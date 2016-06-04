// importing libs
var gulp = require('gulp');

// to run a sequence of task
var runSequence = require('run-sequence');

// required for git related operation
var git =  require('gulp-git');



// git init
gulp.task('git-init', function(){
	git.init({/*args*/}, function(err){
		if(err) throw err;
	})
});

gulp.task('git-add', function(){
	return gulp.src('./*')
		.pipe(git.add({args: '--all'}, function(err){
				if(err) throw err;
			}
		));
});

gulp.task('git-commit', function(){
	return gulp.src('./*')
		.pipe(git.commit('initial commit', {args: '-m'}));
});

// git status
gulp.task('git-status', function(){
	git.status({/*args*/}, function(err){
		if(err) throw err;
	});
});

// git log
gulp.task('git-log', function(){
	git.exec({args: 'log'}, function(err, stdout){
		if(err) throw err;
	});
});


// default task
gulp.task('default', function(){
	runSequence('git-init', 'git-add', 'git-commit');
});












