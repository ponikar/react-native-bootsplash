import {
  withAppBuildGradle,
  withProjectBuildGradle,
} from "expo/config-plugins";

// Android

// setup android/build.gradle for bootsplash

export const setupAndroidBuildGradle = async (config) => {
  const projectBuild = withProjectBuildGradle(config, (updatedConfig) => {
    // get compileSDKVersion
    const compileSDKVersion =
      config.modResults.contents.match(/compileSdkVersion\s(\d+)/)?.[1] || 0;

    if (Number(compileSDKVersion) < 31) {
      console.warn(
        "SplashScreen requires compileSdkVersion 31 or higher. Please update your android/build.gradle file.",
      );
      console.log("Upgrading your android/build.gradle file...");

      // update compileSDKVersion
      config.modResults.contents = config.modResults.contents.replace(
        /compileSdkVersion\s(\d+)/,
        "compileSdkVersion 31",
      );
    }

    // get targetSDKVersion
    const targetSDKVersion =
      config.modResults.contents.match(/targetSdkVersion\s(\d+)/)?.[1] || 0;

    if (Number(targetSDKVersion) < 31) {
      console.warn(
        "SplashScreen requires targetSdkVersion 31 or higher. Please update your android/build.gradle file.",
      );
      console.log("Upgrading your android/build.gradle file...");

      // update targetSDKVersion
      config.modResults.contents = config.modResults.contents.replace(
        /targetSdkVersion\s(\d+)/,
        "targetSdkVersion 31",
      );
    }

    return updatedConfig;
  });

  //--------------------------------------------//

  const appBuildConfig = withAppBuildGradle(config, (updatedConfig) => {
    // add implementation to dependencies
    config.modResults.contents = config.modResults.contents.replace(
      /dependencies\s?{/,
      `dependencies {
                implementation 'androidx.core:core-splashscreen:1.0.0'`,
    );

    return updatedConfig;
  });

  return { ...projectBuild, ...appBuildConfig };
};
