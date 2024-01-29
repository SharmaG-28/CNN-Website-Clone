import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD9vNnAkTPz4g-NXJ7Q2dtwFaXf1TLoSso",
  authDomain: "cnn-clone-ce774.firebaseapp.com",
  projectId: "cnn-clone-ce774",
  storageBucket: "cnn-clone-ce774.appspot.com",
  messagingSenderId: "281438926073",
  appId: "1:281438926073:web:edde2bc9eb8a9ff87e5e28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)