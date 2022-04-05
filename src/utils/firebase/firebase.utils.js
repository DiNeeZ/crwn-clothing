import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
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

//initializing
initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) 

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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password ) return

  return await createUserWithEmailAndPassword(auth, email, password)
}