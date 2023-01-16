import { ConfigPlugin } from "expo/config-plugins";
import { withAndroidPlugin } from "./android";

export const withBootsplash: ConfigPlugin = (config) => {
  return withAndroidPlugin(config);
};
