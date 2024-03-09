module.exports = function (webpackEnv) {
    // ...
    return {
     // ...
      resolve: {
        // ...
        fallback: {
          "fs": false,
          "os": false,
          "tls": false,
          "path": false,
        }
      }
    }
  }