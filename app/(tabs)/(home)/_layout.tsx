import { Link, Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { useRouter } from "expo-router";
import { Button, TouchableOpacity, Text, Pressable } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // header: ()=> null
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          // Button doesn't work in header
          // https://github.com/expo/expo/issues/33093
          headerRight: () => (
            <Button
              onPress={() => {
                router.navigate("/import");
              }}
              title="Import "
            />
          ),
        }}
      />
      <Stack.Screen
        name="import"
        options={{
          headerTitle: "Import Data",
        }}
      />
    </Stack>
  );
}
