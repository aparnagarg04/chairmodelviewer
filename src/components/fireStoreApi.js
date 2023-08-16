import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase if not already initialized
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to fetch model data from Firestore based on product
export async function fetchModelData(clickfile) {
    try {
        const modelDocRef = doc(db, 'model', clickfile); // Use your collection name
        const modelDocSnap = await getDoc(modelDocRef);

        if (modelDocSnap.exists()) {
            const modelData = modelDocSnap.data();
            return modelData.src; // Assuming the 'src' field holds the model source URL
        } else {
            console.error('Document does not exist');
            return null;
        }
    } catch (error) {
        console.error('Error fetching model data:', error);
        throw error;
    }
}

