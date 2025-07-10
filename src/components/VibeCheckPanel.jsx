import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { _DB } from "../../backend/firebaseConfig";

const moodMap = {
  happy: 0.7,
  meh: 0,
  stressed: -0.8,
};

const VibeCheckPanel = () => {
  const [mood, setMood] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mood) return alert("Choose a mood first 😑");

    try {
      setIsSubmitting(true);
      await addDoc(collection(_DB, "mood_logs"), {
        mood, // original string (happy/meh/stressed)
        moodScore: moodMap[mood], // numeric score for ML / sorting
        user_id: "Demo123", // replace with real auth in prod
        timestamp: serverTimestamp(),
      });
      setMood("");
    } catch (error) {
      console.error("Error submitting mood: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <form className="flex flex-col items-start gap-4" onSubmit={handleSubmit}>
        <label className="font-semibold">Enter Your Mood:</label>
        <div className="flex gap-4">
          {["happy", "meh", "stressed"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMood(m)}
              className={`text-2xl px-4 py-2 rounded-lg transition border 
                ${
                  mood === m
                    ? "border-blue-600 bg-blue-100"
                    : "border-gray-300 bg-white"
                }`}
            >
              {m === "happy" ? "😁" : m === "meh" ? "😐" : "😔"}
            </button>
          ))}
        </div>

        {mood && (
          <p className="text-sm text-gray-500">
            Selected mood: <strong>{mood}</strong>
          </p>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default VibeCheckPanel;
