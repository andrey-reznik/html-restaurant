//Сборка шрифтов
module.exports = function (gulp, $, config) {
    return function () {
        return gulp.src(config.path.libs.fonts)
            .pipe(gulp.dest(config.path.app.fonts)); //Перемещение файлов шрифтов в папку fonts
    };
};