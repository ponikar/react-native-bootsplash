export const setupAndroidResource = (config) => {
  // add styles.xml
  const styles = `
    <style name="BootTheme" parent="Theme.SplashScreen">
    <item name="windowSplashScreenBackground">@color/bootsplash_background</item>
    <item name="windowSplashScreenAnimatedIcon">@mipmap/bootsplash_logo</item>
    <item name="postSplashScreenTheme">@style/AppTheme</item>
  </style>`;

  config.modResults.contents = config.modResults.contents.replace(
    /<\/resources>/,
    `${styles}
    </resources>`,
  );

  return config;
};
