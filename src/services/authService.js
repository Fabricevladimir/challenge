import {auth} from '../Firebase/firebase';

function signUp(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function logIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export {signUp, logIn};
