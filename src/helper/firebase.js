import firebase from 'firebase';
import config from '../config/firebase';

class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);

    this.auth = this.app.auth();

    this.database = firebase.database().ref();

    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
}

export default Firebase;
