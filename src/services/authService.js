import {auth} from '../Firebase/firebase';

function signUp(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export {signUp};
