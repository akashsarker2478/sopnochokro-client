// src/components/hero/HeroIllustration.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroIllustration = () => {
  // প্রতিটি আইকনের জন্য আলাদা পজিশন এবং এনিমেশন সেটিং
  const icons = [
    { src: "/hero-images/code.svg", alt: "Code", top: "10%", left: "5%", delay: 0 },
    { src: "/hero-images/uiux.svg", alt: "UI/UX", top: "25%", right: "10%", delay: 0.5 },
    { src: "/hero-images/Data-Science.svg", alt: "Data Science", bottom: "15%", left: "15%", delay: 1 },
    { src: "/hero-images/Digital-Marketing.svg", alt: "Digital Marketing", bottom: "30%", right: "5%", delay: 1.5 },
    { src: "/hero-images/Soft-Skills.svg", alt: "Soft Skills", top: "50%", left: "5%", delay: 2 },
  ];

  // ফ্লোটিং এনিমেশনের সেটিং (হালকা উপরে-নিচে)
  const floatAnimation = {
    animate: {
      y: [0, -15, 0], // ১৫ পিক্সেল উপরে যাবে, তারপর নিচে আসবে
      transition: {
        duration: 4, // পুরো সাইকেল শেষ হতে ৪ সেকেন্ড লাগবে
        repeat: Infinity, // বারবার হবে
        ease: "easeInOut", // স্মুথ এনিমেশন
      },
    },
  };

  return (
    <div className="relative w-full h-[350px] md:h-[500px] flex justify-center items-center">
      
      {/* ১. মেইন ইলাস্ট্রেশন (মাঝখানে) - আপনি "career-progress.svg" কে মেইন হিসেবে রাখতে পারেন */}
      <motion.div
        className="w-[80%] h-auto z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/hero-images/career-progress.svg" // আপনি অলরেডি ডাউনলোড করেছেন
          alt="Main Career Roadmap"
          width={450}
          height={450}
          priority // সবার আগে লোড হওয়ার জন্য
          className="object-contain"
        />
      </motion.div>

      {/* ২. চারপাশের ফ্লোটিং আইকনগুলো */}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute z-20"
          style={{ top: icon.top, left: icon.left, right: icon.right, bottom: icon.bottom }}
          variants={floatAnimation}
          animate="animate"
          // প্রতিটি আইকনের এনিমেশন একেক সময় শুরু হবে, দেখতে সুন্দর লাগবে
          transition={{ ...floatAnimation.animate.transition, delay: icon.delay }}
        >
          <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-primary/10">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={40} // আইকনের সাইজ ৪০ পিক্সেল
              height={40}
              className="object-contain"
            />
          </div>
        </motion.div>
      ))}

      {/* ৩. ব্যাকগ্রাউন্ডের হালকা গ্লো (পার্পল থিমের সাথে মিলিয়ে) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />
    </div>
  );
};

export default HeroIllustration;