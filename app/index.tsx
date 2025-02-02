import { Button, PermissionsAndroid, Platform, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import { useEffect, useState } from "react";
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from "expo-sqlite";
import * as SQLite from "expo-sqlite";
import MainScreen from "./screens/MainScreen";
import ImportScreen from "./screens/ImportScreen";

export default function Index() {
  
  useEffect(() => {}, []);

  return (
    <SQLiteProvider databaseName="app.db">
      <MainScreen />
      <ImportScreen />
    </SQLiteProvider>
  );
}
