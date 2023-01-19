import { withAndroidStyles } from "@expo/config-plugins";
export const setupAndroidResource = (config) => {
  const updatedConfig = withAndroidStyles(config, (updatedConfig) => {
    updatedConfig.modResults.resources.style?.push({
      $: {
        name: "BootTheme",
        parent: "Theme.SplashScreen",
      },
      item: [
        {
          $: {
            name: "windowSplashScreenBackground",
          },
          _: "@color/bootsplash_background",
        },
        {
          $: {
            name: "windowSplashScreenAnimatedIcon",
          },
          _: "@mipmap/bootsplash_logo",
        },
        {
          $: {
            name: "postSplashScreenTheme",
          },
          _: "@style/AppTheme",
        },
      ],
    });
    return updatedConfig;
  });

  return updatedConfig;
};
