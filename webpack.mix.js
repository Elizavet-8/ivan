let mix = require('laravel-mix');

// mix.browserSync('127.0.0.1:5500');

// // Or:

// // https://browsersync.io/docs/options/
// mix.browserSync({
//     proxy: '127.0.0.1:5500'
// });


mix.js('src/js/app.js', 'js').vue();

mix.sass('src/sass/main.sass', 'css')
   .options({
      processCssUrls: false
   });

mix.copy('src/fonts/*', 'dist/fonts')

mix.copy('src/images/*', 'dist/images');
mix.version();


mix.setPublicPath('dist');