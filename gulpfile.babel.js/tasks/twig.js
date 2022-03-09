import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import loadPlugins from "gulp-load-plugins";
import gulpif from "gulp-if";

const gp = loadPlugins();

export default () => {
   return gulp.src(path.twig.src)
      .pipe(gp.plumber({
         errorHandler: gp.notify.onError(error => ({
            title: "TWIG",
            message: error.message
         }))
      }))
      .pipe(gp.twig({
         data: app.twig.data
      }))
      .pipe(gulpif(app.isProd, gp.htmlmin(app.htmlmin)))
      .pipe(gulp.dest(path.html.dest));
}