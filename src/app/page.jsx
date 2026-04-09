import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 text-white text-center p-4">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          স্বপ্নচক্র
        </h1>
        <p className="text-2xl md:text-3xl italic">
          “আপনার ক্যারিয়ারের সঠিক মানচিত্র।”
        </p>
      </div>
    </div>
  );
}