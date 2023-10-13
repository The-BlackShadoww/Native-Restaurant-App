// import React from "react";
// import HomeScreen from "./screens/HomeScreen";
// import MenuScreen from "./screens/MenuScreen";
// import DishDetailScreen from "./screens/DishDetailScreen";
// import { View, Text } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";

// const Drawer = createDrawerNavigator();

// const AppNavigator = () => {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={HomeScreen} />
//                 <Drawer.Screen name="Menu" component={MenuScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// };

// export default AppNavigator;

//! --------- previous one ----------------

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDetailScreen from "./screens/DishDetailScreen";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuScreen} />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
