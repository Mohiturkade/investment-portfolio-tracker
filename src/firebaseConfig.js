import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuRT6pZdn_Dkz9gDylWGDIVqezVl7Tcpg",
  authDomain: "investment-portfolio-man-bc2b2.firebaseapp.com",
  projectId: "investment-portfolio-man-bc2b2",
  storageBucket: "investment-portfolio-man-bc2b2.appspot.com",
  messagingSenderId: "812457067937",
  appId: "1:812457067937:web:962f8307cb3ed196f8f7e0",
  measurementId: "G-8YYWBPB18Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { app };
