/**
 * Disabled Expo Gradle injection (obsolete on Expo SDK 50+)
 * The original script searched for "applyNativeModulesAppBuildGradle(project)"
 * which no longer exists in new templates.
 * This noop keeps the plugin compatible with modern Expo prebuild.
 */

module.exports = (config) => config;
