// import Image from "next/image";

import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 text-white text-center p-4">
//       <div>
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           স্বপ্নচক্র
//         </h1>
//         <p className="text-2xl md:text-3xl italic">
//           “আপনার ক্যারিয়ারের সঠিক মানচিত্র।”
//         </p>
//       </div>
//     </div>
//   );
// }



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">স্বপ্নচক্র প্রজেক্টে স্বাগতম!</h1>
      <h3> “আপনার ক্যারিয়ারের সঠিক মানচিত্র।”</h3>
      <Button variant="default">শুরু করুন</Button>
    </div>
  )
}