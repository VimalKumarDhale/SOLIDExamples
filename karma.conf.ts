module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/**/*.ts", "src/**/*spec.ts"],
    preprocessors: {
      "**/*.ts": "karma-typescript",
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
  });
};
