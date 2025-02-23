import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function DbBrowser() {
  const db = useSQLiteContext();
  const [version, setVersion] = useState<string | null>("");

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
      <Text>SQLite version: {version}</Text>
    </View>
  );
};
