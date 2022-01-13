import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqB1KyMl-7TYBBMWzxgSQ-TxEznhE0f8w",
    authDomain: "test-1-71a52.firebaseapp.com",
    projectId: "test-1-71a52",
    storageBucket: "test-1-71a52.appspot.com",
    messagingSenderId: "512156047740",
    appId: "1:512156047740:web:6771037f7b27d6e910ecf9"
  };


  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)