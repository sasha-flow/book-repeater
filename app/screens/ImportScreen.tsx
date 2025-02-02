import { Button, View, Text, ScrollView } from "react-native";
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from "expo-sqlite";
import * as SQLite from "expo-sqlite";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { useState } from "react";

export default function ImportScreen() {
  const [db, setDb] = useState<SQLiteDatabase | null>(null);
  const [uri, setUri] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [destPath, setDestPath] = useState<string>("");

  const [books, setBooks] = useState<SourceBook[]>([]);

  const appDb = useSQLiteContext();

  const handlePickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      // type: "application/x-sqlite3",
      type: "*/*",
      copyToCacheDirectory: true,
    });
    if (result.canceled) {
      return;
    }

    const { uri, name } = result.assets[0];
    setName(name);
    setUri(uri);

    // const destPath = `${FileSystem.documentDirectory}${name}`;
    // console.log("destPath", destPath);
    // await FileSystem.copyAsync({ from: uri, to: destPath });

    // const db = await SQLite.openDatabaseAsync(destPath);
    const db = await SQLite.openDatabaseAsync(uri);
    setDb(db);
  };

  const fetchBooks = async () => {
    if (!db) {
      console.log("No db");
      return;
    }

    const books = await db.getAllAsync<SourceBook>("SELECT * FROM Books");
    setBooks(books);
    // console.log("Fetched row", JSON.stringify(books));
  };

  const renderBooks = () => {
    return (
      <ScrollView>
        {books?.map((book, index) => {
          return (
            <View key={book.book_id.toString()}>
              <Text>{`${book.book_id} - ${book.title}`}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Pick SQLite File here" onPress={handlePickFile} />
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{uri}</Text>
      </View>
      {db && <Button title="Sync data" onPress={fetchBooks} />}
      {books && renderBooks()}
    </View>
  );
}
