import { withMainActivity } from "expo/config-plugins";

export const setupAndroidMainActivity = (config) => {
  return withMainActivity(config, (updatedConfig) => {
    // add import statement
    updatedConfig.modResults.contents =
      updatedConfig.modResults.contents.replace(
        /import\sandroid\.os\.Bundle;/,
        `import android.os.Bundle;
        import com.zoontek.rnbootsplash.RNBootSplash;`,
      );

    updatedConfig.modResults.contents =
      updatedConfig.modResults.contents.replace(
        /super\.onCreate\(savedInstanceState\);/,
        `super.onCreate(savedInstanceState);
            RNBootSplash.init(this);`,
      );

    return updatedConfig;
  });
};
