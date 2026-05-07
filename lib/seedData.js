import { addDoc, collection, getDocs, limit, query, serverTimestamp } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";
import { sampleCategories, sampleProducts } from "@/lib/sampleData";

export async function seedFirestoreIfEmpty() {
  if (!isFirebaseConfigured()) return;

  const db = getFirebaseDb();
  const categorySnapshot = await getDocs(query(collection(db, "categories"), limit(1)));
  const productSnapshot = await getDocs(query(collection(db, "products"), limit(1)));

  if (categorySnapshot.empty) {
    await Promise.all(
      sampleCategories.map((name) =>
        addDoc(collection(db, "categories"), {
          name: name.name,
          createdAt: serverTimestamp()
        })
      )
    );
  }

  if (productSnapshot.empty) {
    await Promise.all(
      sampleProducts.map((product) =>
        addDoc(collection(db, "products"), {
          ...product,
          createdAt: serverTimestamp()
        })
      )
    );
  }
}
