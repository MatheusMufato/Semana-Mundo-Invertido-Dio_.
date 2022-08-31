import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from './firebase.js'

export async function subscribeToHellfireClube(Subscription) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'HellFire-Club')
    const docRef = await addDoc(hellfireClubCollection, Subscription)
    return docRef.Id
}