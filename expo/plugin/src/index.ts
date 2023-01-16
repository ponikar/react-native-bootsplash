import { ConfigPlugin } from "expo/config-plugins";
import { withAndroidPlugin } from "./android";

const withBootsplash: ConfigPlugin = (config) => {
  return withAndroidPlugin(config);
};

export default withBootsplash;
