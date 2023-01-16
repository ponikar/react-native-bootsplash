import { withAndroidStyles } from "@expo/config-plugins";

export const setupAndroidResource = (config) => {
  // add styles.xml
  const styles = `
    <style name="BootTheme" parent="Theme.SplashScreen">
    <item name="windowSplashScreenBackground">@color/bootsplash_background</item>
    <item name="windowSplashScreenAnimatedIcon">@mipmap/bootsplash_logo</item>
    <item name="postSplashScreenTheme">@style/AppTheme</item>
  </style>` as any;

  const updatedConfig = withAndroidStyles(config, (updatedConfig) => {
    updatedConfig.modResults.resources.style?.push(styles);
    return updatedConfig;
  });

  return updatedConfig;
};
