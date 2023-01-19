import { withMainActivity } from "expo/config-plugins";

export const setupAndroidMainActivity = (config) => {
  return withMainActivity(config, (updatedConfig) => {
    // add import statement at the top new line after package statement
    updatedConfig.modResults.contents =
      updatedConfig.modResults.contents.replace(
        /package\s(.+?);/,
        `package $1;
         import com.zoontek.rnbootsplash.RNBootSplash;
        `,
      );

    // find onCreate method and add RNBootSplash.init at the end of the method

    const onCreateMethod = updatedConfig.modResults.contents.match(
      /protected void onCreate\(Bundle savedInstanceState\)\s\{([\s\S]*?)\}/, // match onCreate method
    )?.[0];

    if (onCreateMethod) {
      // remove setTheme(R.style.AppTheme); from onCreate method
      const onCreateMethodWithoutSetTheme = onCreateMethod.replace(
        /setTheme\(R\.style\.AppTheme\);/g,
        "",
      );

      // add RNBootSplash.init at the end of onCreate method
      const onCreateMethodWithBootSplashInit =
        onCreateMethodWithoutSetTheme.replace(/}/, `RNBootSplash.init(this);}`);

      // replace onCreate method with new onCreate method
      updatedConfig.modResults.contents =
        updatedConfig.modResults.contents.replace(
          onCreateMethod,
          onCreateMethodWithBootSplashInit,
        );
    }

    return updatedConfig;
  });
};
