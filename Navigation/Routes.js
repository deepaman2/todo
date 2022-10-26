import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Navigationstrings from './NaviagationStrings'
import Addtask from '../src/Screen/Addtask/Addtask';
import Home from '../src/Screen/Home/Home';
// import * as Screens from "../src/Screen"

function Routes()
{
    const Stack= createNativeStackNavigator();
return(
<NavigationContainer>
    <Stack.Navigator initialRouteName={Navigationstrings.HOME}>
        <Stack.Screen name={Navigationstrings.HOME} component={Home}/>
        <Stack.Screen name={Navigationstrings.ADD_TASK} component={Addtask}/>
    </Stack.Navigator>
</NavigationContainer>
)
}

export default Routes