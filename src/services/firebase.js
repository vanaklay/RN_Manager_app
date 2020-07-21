import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    // firebase config
    
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  };

  export { firebase };