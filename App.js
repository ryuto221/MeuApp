import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import AboutScreen from "./src/screens/AboutScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <RootNavigation />
  )

}

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            
          }}
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

