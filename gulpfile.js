var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    less = require("gulp-less"),
    webserver = require("gulp-webserver"),
    path = require("path"),
    url = require("url"),
    eslint = require("gulp-eslint"),
    concat = require("gulp-concat");

gulp.task("default", ["watch"]);

var jsPathList = ["bower_components/jquery/dist/jquery.js",
    "bower_components/angular/angular.js",
    "bower_components/angular-route/angular-route.js",
    "bower_components/angular-ui-router/release/angular-ui-router.min.js",
    "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
    "bower_components/angular-loading-bar/build/loading-bar.min.js",
    "src/core/app.js",
    "src/**/**.js"];

var cssPathList = ["bower_components/bootstrap/dist/css/bootstrap.css",
    "bower_components/angular-loading-bar/build/loading-bar.min.css",
    "src/portfolio.less"];

gulp.task("browser-sync", function () {

    browserSync.init({
        "server": {
            "baseDir": "dist",
            "index": "/index.html"
        }
    });

});

gulp.task("less", function () {
    return gulp.src(cssPathList)
        .pipe(less({
            "paths": [path.join(__dirname, "less", "includes")]
        }))
        .pipe(concat("portfolio.css"))
        .pipe(gulp.dest("dist/style/"));
});

gulp.task("lint", function () {
    return gulp.src(["/src/**/*.js"])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});

gulp.task("webserver", function () {
    gulp.src("dist")
        .pipe(webserver({
            host: "0.0.0.0",
            port: process.env.PORT,
            //port: "3000",
            livereload: true,
            open: true
        }));
});

gulp.task("scripts", function () {
    return gulp.src(jsPathList)
        .pipe(concat("portfolio.js"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("copyAssets", function () {
    return gulp.src("assets/**")
        .pipe(gulp.dest("dist/assets/"));
});

gulp.task("copyTemplates", function () {
    return gulp.src("src/**/**.html")
        .pipe(gulp.dest("dist/templates/"));
});

gulp.task("copyIndex", function () {
    return gulp.src("index.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task("build", ["less", "copyAssets", "copyTemplates", "scripts", "copyIndex"]);

gulp.task("watch", function () {
    gulp.watch("/src/**.less", ["less"]);
    gulp.watch(pathList, ["scripts"]);
    gulp.watch("/src/**").on("change", "build");
});

gulp.task("dev-live", ["lint", "build", "browser-sync", "watch"]);
