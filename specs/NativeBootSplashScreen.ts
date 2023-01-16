import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  hide: (props: { fade: boolean }) => void;
}

export default TurboModuleRegistry.get<Spec>("NativeBootSplashScreen");
