import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [dbUri, setDbUri] = useState<string | null>(null);

  useEffect(() => {
    const loadDbUri = async () => {
      try {
        const value = await AsyncStorage.getItem("dbUri");
        setDbUri(value);
      } catch (e) {
        console.log("error reading uri", e);
      }
    };

    loadDbUri();
  });

  return (
    <SQLiteProvider databaseName="app.db">
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => null,
          }}
        />
      </Stack>
    </SQLiteProvider>
  );
}
