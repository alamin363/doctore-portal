import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.react_APP_apiKey,
  authDomain: process.env.react_APP_authDomain,
  projectId: process.env.react_APP_projectId,
  storageBucket: process.env.react_APP_storageBucket,
  messagingSenderId: process.env.react_APP_messagingSenderId,
  appId: process.env.react_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
