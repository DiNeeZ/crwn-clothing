import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyDfneidFQtMDLHIyfD4xQNV2vUoeWk1haU',
  authDomain: 'crwn-db-749a7.firebaseapp.com',
  projectId: 'crwn-db-749a7',
  storageBucket: 'crwn-db-749a7.appspot.com',
  messagingSenderId: '672403988977',
  appId: '1:672403988977:web:4d561f9fca36856db6a450'
}

//INITIALIZING
initializeApp(firebaseConfig)

export const auth = getAuth()

// SIGN IN WITH GOOGLE
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) 

//CREATING USER DOCUMENT IN FIRESTORE DB
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch(err) {
      console.log('error creating a user', err.message)
    }
  } 

  return userDocRef
}

//SIGN UP AND SIGN IN WITH EMAIL AND PASSWORD
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password ) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth ,email, password)
}

export const signOutUser = async () => await signOut(auth) 

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback) 