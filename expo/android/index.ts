import { ConfigPlugin } from "expo/config-plugins";
import { setupAndroidBuildGradle } from "./0-android-build-setup";
import { setupAndroidResource } from "./1-android-resource-setup";
import { setupAndroidManifest } from "./2-android-manifest-setup";
import { setupAndroidMainActivity } from "./4-android-main-activity-setup";

export const withAndroidPlugin: ConfigPlugin = (config) => {
  // step 1: android build setup
  const androidBuild = setupAndroidBuildGradle(config);

  // step 2: android resource setup
  const androidResource = setupAndroidResource(config);

  // setup 3: android manifest setup
  const androidManifest = setupAndroidManifest(config);

  // setup 4: android main activity setup
  const androidMainActivity = setupAndroidMainActivity(config);

  return {
    ...androidBuild,
    ...androidResource,
    ...androidManifest,
    ...androidMainActivity,
  };
};
