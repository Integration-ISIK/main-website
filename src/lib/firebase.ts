import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { onMount } from "svelte";

const firebaseConfig = {
    apiKey: "AIzaSyCtwjCDjGxYBtcJav39fpgFm-Ehve_Cjyo",
    authDomain: "integration-isik.firebaseapp.com",
    projectId: "integration-isik",
    storageBucket: "integration-isik.appspot.com",
    messagingSenderId: "807895583350",
    appId: "1:807895583350:web:ac5de8036f088e16822d57",
    measurementId: "G-FN6K7SEPND",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

onMount(() => {
    if (
        location.hostname === "127.0.0.1" ||
        location.hostname === "localhost"
    ) {
        console.log("Local environment detected!");
        connectAuthEmulator(auth, `http://${location.hostname}:9099`);
        connectFirestoreEmulator(firestore, location.hostname, 8080);
        connectFunctionsEmulator(functions, location.hostname, 5001);
        connectStorageEmulator(storage, location.hostname, 9199);
    }
});
