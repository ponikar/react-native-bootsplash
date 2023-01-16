import { withAndroidManifest } from "expo/config-plugins";

export const setupAndroidManifest = (config) => {
  return withAndroidManifest(config, (config) => {
    // replace android theme
    if (config.modResults.manifest && config.modResults.manifest.application) {
      config.modResults.manifest.application[0].$["android:theme"] =
        "@style/BootTheme";
    }

    return config;
  });
};
