import firebase from 'firebase'
import { firebaseConfig } from './config'
require("firebase/firestore")

export const firebaseApp = firebase.initializeApp(firebaseConfig)
const _firestore = firebaseApp.firestore()
_firestore.settings({ timestampsInSnapshots: true })
export const firestore = _firestore