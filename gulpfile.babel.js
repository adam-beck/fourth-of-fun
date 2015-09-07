import gulp from 'gulp';
import BrowserSync from 'browser-sync'

const browserSync = BrowserSync.create();

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
    files: ['public/css/*.css'],
    notify: false,
    open: false
  });

  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
});
