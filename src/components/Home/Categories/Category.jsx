// src/components/Home/Category.jsx
"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Database, LineChart, Cpu, ArrowUpRight } from "lucide-react";

// ক্যাটাগরি ডেটা (কালার এবং আইকন সহ)
const categories = [
  {
    title: "ওয়েব ডেভেলপমেন্ট",
    desc: "আধুনিক স্ট্যাক দিয়ে ওয়েবসাইট তৈরি।",
    icon: <Code className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />, // রেসপন্সিভ আইকন সাইজ
    color: "text-blue-500",
    bg: "bg-blue-500/15", // মোবাইলের জন্য একটু বেশি ভিজিবল ব্যাকগ্রাউন্ড
    borderColor: "border-blue-500/20",
    glow: "shadow-blue-500/10",
  },
  {
    title: "UI/UX ডিজাইন",
    desc: "ইউজার ফ্রেন্ডলি ইন্টারফেস ডিজাইন।",
    icon: <Palette className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
    color: "text-pink-500",
    bg: "bg-pink-500/15",
    borderColor: "border-pink-500/20",
    glow: "shadow-pink-500/10",
  },
  {
    title: "ডেটা সায়েন্স",
    desc: "ডেটা অ্যানালাইসিস ও ভিজ্যুয়ালাইজেশন।",
    icon: <Database className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
    color: "text-teal-500",
    bg: "bg-teal-500/15",
    borderColor: "border-teal-500/20",
    glow: "shadow-teal-500/10",
  },
  {
    title: "ডিজিটাল মার্কেটিং",
    desc: "ব্র্যান্ড প্রমোশন ও এসইও স্ট্র্যাটেজি।",
    icon: <LineChart className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
    color: "text-orange-500",
    bg: "bg-orange-500/15",
    borderColor: "border-orange-500/20",
    glow: "shadow-orange-500/10",
  },
  {
    title: "সফট স্কিলস",
    desc: "কমিউনিকেশন ও লিডারশিপ গাইড।",
    icon: <Cpu className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
    color: "text-purple-500",
    bg: "bg-purple-500/15",
    borderColor: "border-purple-500/20",
    glow: "shadow-purple-500/10",
  },
];

// একটি কার্ডের জন্য সাব-কম্পোনেন্ট
const CategoryCard = ({ item, index }) => {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

if (!mounted) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // ৩০% স্ক্রিনে আসলে এনিমেশন শুরু হবে
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }} // পিসিতে হালকা উপরে উঠবে
      
      // মোবাইলে শুরু থেকেই কালারফুল, পিসিতে হোভার করলে কালারফুল
      className={`group relative p-6 sm:p-7 md:p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer overflow-hidden shadow-sm backdrop-blur-xl
        ${item.bg} ${item.borderColor} ${item.glow} // মোবাইলের জন্য ডিফল্ট কালার
        hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 // পিসির জন্য হোভার ইফেক্ট
      `}
    >
      
      {/* ১. আইকন সেকশন (রেসপন্সিভ সাইজ) */}
      <div className={`relative w-14 h-14 sm:w-16 sm:h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-transform md:group-hover:scale-110 duration-500`}>
        {item.icon}
      </div>

      {/* ২. টেক্সট কন্টেন্ট */}
      <div className="relative z-10 space-y-2.5 sm:space-y-3 pb-12 sm:pb-14"> {/* অ্যারো বাটনের জন্য নিচে জায়গা রাখা হয়েছে */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight md:group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-none">
          {item.desc}
        </p>
      </div>

      {/* ৩. এনিমেটেড বাউন্সিং অ্যারো বাটন (সারাক্ষণ লাফাবে) */}
      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border flex items-center justify-center transition-all duration-500 overflow-hidden
        bg-background md:bg-white/10 md:group-hover:bg-primary md:group-hover:border-primary md:group-hover:text-white // মোবাইলে ব্যাকগ্রাউন্ড
      ">
        <motion.div
          animate={{
            y: [0, -3.5, 0], // উপর-নিচে জাম্প করবে
            x: [0, 3.5, 0],  // কোণাকুণি ফিল দিতে x জাম্পও অ্যাড করা হয়েছে
          }}
          transition={{
            duration: 2.2,    // ২.২ সেকেন্ড সময় নিবে এক লুপে
            repeat: Infinity, // চলতেই থাকবে
            ease: "easeInOut",
          }}
          className="flex items-center justify-center"
        >
          <ArrowUpRight className="w-5 h-5 transition-transform md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Category = () => {
  return (
    <section id="categories" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-background">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (বড় গ্লো) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* সেকশন হেডার */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-4 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
            আপনার পছন্দের <span className="text-primary">ক্যারিয়ার</span> বেছে নিন
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
            প্রতিটি ক্যাটাগরির জন্য আমাদের কাছে রয়েছে ডেডিকেটেড রোডম্যাপ এবং সেরা সব ফ্রি রিসোর্স।
          </p>
        </div>

        {/* ৩ কলামের আধুনিক গ্রিড (মোবাইলে ১ কলাম) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {categories.map((item, index) => (
            <CategoryCard key={index} item={item} index={index} />
          ))}

          {/* একটি স্পেশাল কার্ড (সবগুলো দেখার জন্য) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="group p-8 rounded-[2rem] bg-primary flex flex-col items-center justify-center text-center text-primary-foreground space-y-4 shadow-xl shadow-primary/20 cursor-pointer overflow-hidden relative"
          >
            {/* হোভার গ্লো ইফেক্ট */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <h3 className="text-2xl font-bold relative z-10">আরও অনেক কিছু আছে!</h3>
            <p className="opacity-90 relative z-10">আপনি কি আপনার নির্দিষ্ট পথ খুঁজে পাচ্ছেন না? সব গাইডলাইন এখানে দেখুন।</p>
            <button className="relative z-10 px-8 py-3 bg-white text-primary font-bold rounded-full hover:shadow-lg transition-all active:scale-95">
              সব দেখুন
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Category;