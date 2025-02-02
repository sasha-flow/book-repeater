import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function MainScreen() {
  const db = useSQLiteContext();
  const [version, setVersion] = useState("");

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
      <View>
        <Text>SQLite version: {version}</Text>
      </View>
    </View>
  );
}
