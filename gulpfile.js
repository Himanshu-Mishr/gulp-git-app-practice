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

// git add
gulp.task('git-add', function(){
	return gulp.src('./*')
		.pipe(git.add({args: '--all'}, function(err){
				if(err) throw err;
			}
		));
});

// git commit -m 'message'
gulp.task('git-commit', function(){
	return gulp.src('./*')
		.pipe(git.commit('initial commit', {args: '-m', emitData:true}));
});

// git add remote
gulp.task('git-add-remote', function(){
	git.addRemote('origin', 'git@github.com:Himanshu-Mishr/gulp-git-app-practice.git', function(err){
			if(err) throw err;
	});
});

// git remove remote
gulp.task('git-remove-remote', function(){
	git.removeRemote('origin', function(err){
		if(err) throw err;
	});
});

// git push
gulp.task('git-push', function(){
	git.push('origin', 'master', {emitData:true}, function(err){
		if(err) throw err;
	});
});

// git pull
gulp.task('git-pull', function(){
	git.pull('origin', 'master', {/*args*/}, function(err){
		if(err) throw err;
	});
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
	runSequence('git-add', 'git-commit', 'git-push', 'git-pull');
});












