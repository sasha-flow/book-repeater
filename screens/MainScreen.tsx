import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainScreen() {
  const db = useSQLiteContext();
  const [version, setVersion] = useState("");
  const [uri, setUri] = useState<string | null>(null);

  useEffect(() => {
    const loadDbUri = async () => {
      try {
        const value = await AsyncStorage.getItem("dbUri");
        setUri(value);
      } catch (e) {
        console.log("error reading uri", e);
      }
    };

    loadDbUri();
  }, []);

  useEffect(() => {
    async function setup() {
      const result = await db.getFirstAsync<{ "sqlite_version()": string }>(
        "SELECT sqlite_version()"
      );
      setVersion(result!["sqlite_version()"]);
    }
    setup();
  }, []);

  return (
    <View>
      <Text>Main screen</Text>
      <Text>file path: {uri}</Text>
      <View>
        <Text>SQLite version: {version}</Text>
      </View>
    </View>
  );
}
