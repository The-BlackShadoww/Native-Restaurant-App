import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDetailScreen from "./screens/DishDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import Icon from "./components/Icon";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

//! --------- Nested navigation ------------

const MenuStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Icon
                        action={() => navigation.toggleDrawer()}
                        name="ios-menu"
                        color="black"
                        size={24}
                        iconStyle={{ paddingRight: 15 }}
                    />
                ),
                headerStyle: {
                    backgroundColor: "#f53b50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen
                name="Dish Detail"
                component={DishDetailScreen}
                options={({ route }) => ({ title: route.params.dish.name })}
            />
        </Stack.Navigator>
    );
};

const FavStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Icon
                        action={() => navigation.toggleDrawer()}
                        name="ios-menu"
                        color="black"
                        size={24}
                        iconStyle={{ paddingRight: 15 }}
                    />
                ),
                headerStyle: {
                    backgroundColor: "#f53b50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesScreen} />
        </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
            <Drawer.Screen name="Favourites" component={FavStack} />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
