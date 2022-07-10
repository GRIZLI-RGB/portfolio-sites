const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const ap = require('gulp-autoprefixer');
const im = require('gulp-imagemin');
const del = require('del');
const pug = require('gulp-pug');

// автообновление браузера
function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

// чистка директории dist
function cleanDist() {
    return del('dist')
}

// сжимаем изображения
function images() {
    return src('app/images/**/*')
    .pipe(im([
        im.gifsicle({interlaced: true}),
	    im.mozjpeg({quality: 75, progressive: true}),
	    im.optipng({optimizationLevel: 5}),
	    im.svgo({
		plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
		]
	    })
    ]))
    .pipe(dest('dist/images'))
}

// собираем проект
function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

// работаем с JS-файлами
function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

// конвертация PUG (Jade) -> HTML
function convertPug () {
    return src('app/*.pug')
        .pipe(pug(
            {pretty: true}
        ))
        .pipe(dest('app'))
}

// работаем с CSS/SCSS-файлами
function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(ap({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css')) 
        .pipe(browserSync.stream())
}

// следим за нужными файлами
function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
    watch(['app/*.pug'], convertPug);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.convertPug = convertPug;

exports.build = series(cleanDist, images, build);
exports.default = parallel(convertPug, styles, scripts, browsersync, watching);