import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXF5xShGSm_WEBkxdstRUUpYvpJSFeQjU",
  authDomain: "recipe-website-1234.firebaseapp.com",
  projectId: "recipe-website-1234",
  storageBucket: "recipe-website-1234.appspot.com",
  messagingSenderId: "790450869470",
  appId: "1:790450869470:web:21ba7d98b008711b335e4f",
  measurementId: "G-8JYTW715LF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
