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
import MainScreen from "../../../screens/MainScreen";
import ImportScreen from "../import";
import { Link, useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();


  return (
    <>

      <MainScreen />
      <Link href="/import">Import</Link>
      <Button
        onPress={() => {
          router.navigate("/import");
        }}
        title="Import file"
      />
      {/* <ImportScreen /> */}
    </>
  );
}
