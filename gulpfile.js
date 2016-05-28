var gulp = require("gulp");
var stylus = require("gulp-stylus");

var chalk = require("chalk");
var concat = require("gulp-concat");
var fs = require("fs");
var path = require("path")
var rimraf = require("rimraf");

gulp.task("js", () => {
  return gulp.src(path.join(__dirname, "/src/**/*.js"))
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest(path.join(__dirname, "/public")));
});

gulp.task("html", () => {
  gulp.src(path.join(__dirname, "/src/**/*.html"))
    .pipe(gulp.dest(path.join(__dirname, "/public")));
});

gulp.task("css", () => {
  gulp.src(path.join(__dirname, "/src/**/*.styl"))
    .pipe(stylus())
    .pipe(gulp.dest(path.join(__dirname + "/public")));
});

gulp.task("watch", () => {
    var logChange = event => console.log(chalk.white.bgBlack(`File ${chalk.cyan.underline(event.path)} was ${chalk.yellow(event.type)}`));

    gulp.watch("**/*.js", {cwd: path.join(__dirname, "/src")}, ["js"])
      .on("change", event => logChange(event));

    gulp.watch("**/*.html", {cwd: path.join(__dirname, "/src")}, ["html"])
      .on("change", event => logChange(event));

    gulp.watch("**/*.styl", {cwd: path.join(__dirname, "/src")}, ["css"])
      .on("change", event => logChange(event));
});

gulp.task("clean", cb => {
  fs.rename(path.join(__dirname, "/public/bower_components"), path.join(__dirname, "/bower_components"), function() {
    rimraf("public/**/*", function() {
      fs.rename(path.join(__dirname, "/bower_components"), path.join(__dirname, "/public/bower_components"), cb);
    });
  });
});

gulp.task("build", ["js", "html", "css"]);

gulp.task("default", ["build", "watch"]);
