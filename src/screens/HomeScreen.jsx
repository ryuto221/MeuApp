import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen() {
    return (
      <View>
        <Text> Ola seja bem vindo ao meu App</Text>
        <Button mode="contained">sobre</Button>
      </View>
    );
  }