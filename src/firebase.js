import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYUQWmwuEN7LhTJTIKKh1STO01msBnzD0",
  authDomain: "chatroom-87299.firebaseapp.com",
  databaseURL: "https://chatroom-87299.firebaseio.com",
  projectId: "chatroom-87299",
  storageBucket: "chatroom-87299.appspot.com",
  messagingSenderId: "1075098450390",
  appId: "1:1075098450390:web:07f51d16f847dcedc6cc77"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db