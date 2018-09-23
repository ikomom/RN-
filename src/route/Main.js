import {
    createStackNavigator
} from 'react-navigation'
import HomeScreen from '../navigation/HomeScreen'
import MineScreen from '../navigation/MineScreen'
import UserLogin from '../page/LoginPage/UserLogin'
import LifeTest from '../page/LifeTest';
import MyFlatList from '../compenent/MyFastList'
import MySectionList from "../compenent/MySectionList";
import FetchTest from "../page/FetchTest";
import TestLogin from "../page/LoginPage/TestLogin";
import CommutiesTest from "../page/CommutiesTest";
import UserSection from "../page/User/UserSection";


const Navigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Mine: {screen: MineScreen},
    UserLogin:{screen: UserLogin},
    lifeTest:{screen: LifeTest},
    MyFlatList:{screen: MyFlatList},
    MySectionList:{screen:MySectionList},
    FetchTest:{screen:FetchTest},
    TestLogin:{screen:TestLogin},
    CommutiesTest:{screen:CommutiesTest},
    UserSection:{screen:UserSection},
});


export default Navigator;