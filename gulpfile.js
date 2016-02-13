var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    less = require("gulp-less"),
    webserver = require("gulp-webserver"),
    path = require("path"),
    url = require("url"),
    eslint = require("gulp-eslint"),
    uglify = require("gulp-uglify"),
    cssnano = require("gulp-cssnano"),
    ngAnnotate = require("gulp-ng-annotate"),
    del = require("del"),
    runSequence = require("run-sequence"),
    htmlMin = require("gulp-htmlMin"),
    concat = require("gulp-concat");

gulp.task("default", ["watch"]);

var libPathList = ["bower_components/jquery/dist/jquery.min.js",
    "bower_components/angular/angular.min.js",
    "bower_components/angular-route/angular-route.min.js",
    "bower_components/angular-ui-router/release/angular-ui-router.min.js",
    "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
    "bower_components/angular-loading-bar/build/loading-bar.min.js"
    ];

var sourcePathList = [
    "src/core/app.js",
    "src/**/**.js"
];

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

gulp.task("minify-css", function() {
    return gulp.src("dist/style/portfolio.css")
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style/'));
});

gulp.task("build-style", function () {
    runSequence("less", "minify-css");
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

gulp.task("concat-scripts", function () {
    return gulp.src(libPathList.concat(["temp/app.js","temp/**/**.js"]))
        .pipe(concat("portfolio.js"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("scripts", function () {
    return gulp.src(libPathList.concat(sourcePathList))
        .pipe(concat("portfolio.js"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("uglify-scripts", function () {
    return gulp.src(sourcePathList)
        .pipe(ngAnnotate({add: true, remove: true}))
        .pipe(uglify())
        .pipe(gulp.dest("temp/"));
});

gulp.task("build-scripts", function () {
    runSequence("uglify-scripts", "concat-scripts");
});

gulp.task("copyAssets", function () {
    return gulp.src("assets/**")
        .pipe(gulp.dest("dist/assets/"));
});

gulp.task("minify-html", function() {
    return gulp.src("src/**/**.html")
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest("temp/templates/"));
});

gulp.task("copyTemplates", function () {
    return gulp.src("temp/templates/**/**.html")
        .pipe(gulp.dest("dist/templates/"));
});

gulp.task("copyTemplatesDev", function () {
    return gulp.src("src/**/**.html")
        .pipe(gulp.dest("dist/templates/"));
});

gulp.task("build-templates", function () {
   runSequence("minify-html", "copyTemplates");
});

gulp.task("copyIndex", function () {
    return gulp.src("index.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task("clean-temp", function () {
    del("temp/**");
});

gulp.task("build-dev", ["less", "copyAssets", "copyTemplatesDev", "scripts", "copyIndex"]);

gulp.task("build", function () {
    runSequence("build-style", "build-scripts", "build-templates", "copyAssets", "copyIndex", "clean-temp");
});

gulp.task("watch", function () {
   // gulp.watch("/src/**.less", ["less"]);
   // gulp.watch(jsPathList, ["build-scripts"]);
    //gulp.watch("/src/**").on("change", "build-dev");
});

gulp.task("dev-live", ["lint", "build-dev", "browser-sync", "watch"]);
