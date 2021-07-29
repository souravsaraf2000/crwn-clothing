import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKIjlcGGJtmIpEAu31qb3OFDztTX1Hr2E",
    authDomain: "crwn-db-8a984.firebaseapp.com",
    projectId: "crwn-db-8a984",
    storageBucket: "crwn-db-8a984.appspot.com",
    messagingSenderId: "776330550012",
    appId: "1:776330550012:web:97434dfb1a687b43c89579",
    measurementId: "G-JK8HGP2SLZ"
  };

firebase.initializeApp(config);

export const createUser = async(user,...additionalParameters)=>{
  if(!user)
    return;
  const reference = firestore.doc(`users/${user.uid}`);
  const snapShot = await reference.get();
  if(!snapShot.exists)
  {
    const {displayName, email} = user;
    const storedAt = new Date();
    try{
      await reference.set({
        displayName,
        email,
        storedAt,
        ...additionalParameters
      })}
      catch(error){
        console.log("error creating user",error.message);
      }
    }
    return reference;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;