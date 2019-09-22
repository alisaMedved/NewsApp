import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectID: "",
    storageBucket: "",
    massagingSenderID: "",
    appId: ""
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
