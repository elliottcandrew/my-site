var gulp        = require('gulp'),
  browserSync   = require('browser-sync'),
  hygienist     = require('hygienist-middleware'),
  sass          = require('gulp-sass'),
  scss          = require('gulp-scss'),
  prefix        = require('gulp-autoprefixer'),
  minifycss     = require('gulp-minify-css'),
  jshint        = require('gulp-jshint'),
  concat        = require('gulp-concat'),
  uglify        = require('gulp-uglify'),
  rename        = require('gulp-rename'),
  replace       = require('gulp-replace'),
  cp            = require('child_process'),
  pug           = require('gulp-pug'),
  bourbon       = require('bourbon').includePaths;
  ghPages       = require('gulp-gh-pages');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  var pl = process.platform === "win32" ? "jekyll.bat" : "jekyll";
  return cp.spawn(pl, ['build'], {stdio: 'inherit'})
  .on('close', done);
});


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});


/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
  browserSync({
  server: {
  baseDir: '_site',
  middleware: hygienist("_site")
  },
  notify: false
  });
});


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('assets/css/main.sass')
  .pipe(sass({
  includePaths: ['css'],
  onError: browserSync.notify
  }).on('error', sass.logError))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(rename('main.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('assets/css'))
  .pipe(gulp.dest('_site/assets/css'))
  .pipe(browserSync.reload({stream:true}));
});

/**
 * Compile Pug
 */
gulp.task('pug', function() {
  return gulp.src('_pugfiles/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('_includes'));
});

/*
** JS Task
*/
gulp.task('js', function() {
  return gulp.src('assets/js/_scripts.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('_scripts.js'))
  .pipe(gulp.dest('assets/js'))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js'))
  .pipe(gulp.dest('_site/assets/js'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('assets/js/*.js', ['js']).on("change", browserSync.reload);
  gulp.watch('assets/css/**/*.sass', ['sass']);
  gulp.watch('assets/css/**/*.scss', ['sass']);
  gulp.watch(['!_site/**/*', '!node_modules/**/*', '!.sass-cache/**/*', '_includes/*', '*.html', '**/*.md', 'assets/imgs/*/_import/*'], ['jekyll-rebuild']);
  gulp.watch('_pugfiles/*.pug', ['pug']);
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

/* Deploy Jekyll _site build to gh-pages branch ready to host */
// gulp.task('deploy', ['jekyll-build'], function () {
//   return gulp.src('./_site/**/*')
//   .pipe(deploy());
// });

gulp.task('deploy', function () {
  return gulp.src('./_site/**/*')
  .pipe(ghPages());
});
