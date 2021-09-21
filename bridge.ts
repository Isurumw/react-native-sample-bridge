import {NativeModules} from 'react-native';

interface IBridge {
  fetchNewState: () => Promise<string>;
}

const Bridge = NativeModules.BridgeModule as IBridge;
export default Bridge;
