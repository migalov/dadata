import data from "../data/index.json";

const isProd = process.argv.includes("--production"),
      isDev = !isProd,
      isDevEmail = process.argv.includes("email");

export default {

   isProd: isProd,
   isDev: isDev,
   isDevEmail: isDevEmail,

   htmlmin: {
      collapseWhitespace: isProd
   },

   twig: {
     data: data,
     setting: {
        email: isDevEmail ? "email" : ""
     }
   },

   imagemin: {
      vebrose: true
   },

   inlineCss: {
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
   },

   webpack: {
      mode: isProd ? "production" : "development"
   },

   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   }
}