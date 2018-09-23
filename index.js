import { AppRegistry } from 'react-native';
import UserLogin from "./src/page/LoginPage/UserLogin"
import PassWordReset from "./src/page/PassWordPage/PassWordReset"
import App from './App'
import Test from "./sLearning/page/Test";

import { YellowBox } from 'react-native'; YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('zzzzz', () => Test);
