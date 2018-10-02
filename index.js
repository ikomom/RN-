import { AppRegistry } from 'react-native';
import App from './App'//自定义的导航栏

//30-Days
//import day1 from './sThrtyDay/Day1'

//慕课的课程
import Test1 from "./sLearning/_1_component/Test";
import Test2 from "./sLearning/_2_props/Test"
import Test3 from "./sLearning/_3_state/Test";
import Test4 from "./sLearning/_4_useClass/Test";
import Test5 from "./sLearning/_5_ref/Test";
import Test6 from "./sLearning/_6_btn/Test";
import Test7 from "./sLearning/_7_image/Test";


//忽略navigation的isMounted警告
import { YellowBox } from 'react-native'; YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('zzzzz', () => Test7);
