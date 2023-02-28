import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text> Ola seja bem vindo ao meu App</Text>
      <Button mode="contained">sobre</Button>
    </View>
  );
}

function AboutScreen(){
  return (
    <View>
      <Text>Pagina Sobre</Text>
    </View>
  )
}