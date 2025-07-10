import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { _DB } from "../../backend/firebaseConfig";

const EmotionalDamageBoard = () => {
  const [mood, setMood] = useState([]);

  useEffect(() => {
    
        const q = query(
          collection(_DB, "mood_logs"),
          where("moodScore", "<", -0.7),
          orderBy("moodScore", "asc"),
          limit(20)
        );

        // Create the snapshot listener
        const unsubscribe = onSnapshot(q, (querySnap) => {
          const vibes = querySnap.docs.map((doc) => ({
            id: doc.id, // include doc ID
            ...doc.data(), // spread all mood fields
          }));
          setMood(vibes); // 🔥 update state
        });
      
    

    
    return () => unsubscribe();
  }, []);
  return <div>EmotionalDamageBoard</div>;
};
export default EmotionalDamageBoard;
