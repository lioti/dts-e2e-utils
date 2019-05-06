const gulp = require('gulp');

/**
 * clean:
 * Limpa os arquivos JavaScript compilados dos diretórios.
 */
gulp.task('clean', () => require('del')(['./dist/']));

/**
 * copy:
 * Copia os recursos necessários para a pasta "dist".
 */
gulp.task('copy', () => gulp.src(['package*.json', 'README.md']).pipe(gulp.dest('./dist')));

/**
 * compile:
 * Compila os arquivos TypeScript e move os arquivos JavaScript compilados para
 * a pasta "dist".
 */
gulp.task('compile', gulp.series('clean', () => {
  const ts = require('gulp-typescript');
  const tsProject = ts.createProject('./tsconfig.json');
  return gulp .src(['./src/**/*.ts']).pipe(tsProject()).pipe(gulp.dest('./dist'));
}));

/**
 * build:
 * Efetua o build do projeto.
 */
gulp.task('build', gulp.series('compile', 'copy', () => {
  const uglify = require('gulp-uglify-es').default;
  return gulp.src('./dist/**/*.js').pipe(uglify()).pipe(gulp.dest((file) => file.base));
}));
