// import React from "react";
// import { AppRegistry } from "react-native";
// import { name as appName } from "./app.json";

// import App from "./app/AppNavigator";

// AppRegistry.registerComponent(appName, () => App);

// export default function Main() {
//     return (
//         <Reanimated.Root>
//             <App />
//         </Reanimated.Root>
//     );
// }

//! --------- previous one ----------------

import React from "react";
import AppNavigator from "./app/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
