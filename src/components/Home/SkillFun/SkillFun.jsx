// src/components/Home/SkillFun.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCw, Lightbulb, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";

const funTips = [
  { topic: "বাস্তবতা", tip: "পকেটে টাকা না থাকলে রোমান্টিক ডিনার তো দূরের কথা, ফুচকার দোকানেও মান সম্মান থাকবে না!", emoji: "💸" },
  { topic: "ক্যারিয়ার", tip: "বেকার থাকলে শাশুড়ি আম্মা আপনাকে জামাই না, আপদ মনে করবে। তাই আগে কোডিং শিখুন!", emoji: "🧟" },
  { topic: "ভালোবাসা", tip: "ভালোবাসা দিয়ে পেট ভরে না ভাই, রিলেশন টিকিয়ে রাখতেও এখন নেট প্যাক আর গিফট লাগে!", emoji: "💔" },
  { topic: "মোটিভেশন", tip: "নিজেকে এমন ভাবে গড়ুন যেন আপনাকে ছেড়ে যাওয়া মানুষটি পরে আপনাকে লিঙ্কডইনে রিকোয়েস্ট পাঠাতে বাধ্য হয়!", emoji: "📈" },
  { topic: "আলসেমি", tip: "দুপুর পর্যন্ত ঘুমানো বন্ধ করুন। মনে রাখবেন, আপনি যখন ঘুমাচ্ছেন, আপনার ক্রাশের বিয়ে তখন অন্য কারো সাথে ঠিক হচ্ছে!", emoji: "⏰" },
  { topic: "সফট স্কিল", tip: "মানুষের সাথে কথা বলা শিখুন। শুধু কোডিং জানলে কম্পিউটার কথা শুনবে, ক্লায়েন্ট না!", emoji: "🗣️" },
  { topic: "ধৈর্য", tip: "এক রাতে কেউ বস হয় না। জাকারবার্গও একদিনে ফেসবুক বানায়নি, আগে ক্যারিয়ার বানান তারপর প্রেম!", emoji: "🐢" },
  { topic: "বাস্তব কথা", tip: "বেকার ছেলের গার্লফ্রেন্ড থাকা আর ভাঙা ফোনে ডিসপ্লে থাকা একই কথা—কখন যে নিভে যাবে কেউ জানে না!", emoji: "📱" },
  { topic: "লক্ষ্য", tip: "ফেসবুকে স্যাড স্ট্যাটাস দেওয়া কমিয়ে গিটহাবে কমিট বাড়ান, কাজে দেবে!", emoji: "💻" },
  { topic: "ফোকাস", tip: "একসাথে তিন নৌকায় পা দেবেন না। তিনটে রিলেশন আর তিনটে প্রোগ্রামিং ল্যাঙ্গুয়েজ—দুটোই আপনাকে ডুবিয়ে দেবে!", emoji: "🛶" },
  { topic: "সাফল্য", tip: "আপনার সফলতার দিন আপনার এক্স-এর বিয়েতে বিরিয়ানি খাওয়ার চেয়ে বড় আনন্দ আর কিছুতে নেই!", emoji: "🥘" },
  { topic: "লাইফ হ্যাক", tip: "মানুষকে ইমপ্রেস করার চেষ্টা বাদ দিন। নিজের স্কিল ইমপ্রেস করুন, মানুষ এমনিই পেছনে আসবে।", emoji: "😎" },
  { topic: "চাকরি", tip: "চাকরিটা আগে পান, দেখবেন গার্লফ্রেন্ডের আব্বু আপনাকে নিজের ছেলের চেয়েও বেশি আদর করছে!", emoji: "🤝" },
  { topic: "শেখা", tip: "শিখতে লজ্জা পাবেন না। আজ যে আপনাকে নিয়ে হাসছে, কাল সে-ই আপনার কাছে সাহায্যের জন্য আসবে।", emoji: "📚" },
  { topic: "ডিজাইন", tip: "রঙিন চশমা পরে দুনিয়া দেখা সহজ, কিন্তু একটা প্রফেশনাল পোর্টফোলিও বানানো কঠিন। কঠিন কাজটাই আগে করুন!", emoji: "🎨" },
  { topic: "টাইম ম্যানেজমেন্ট", tip: "সারাদিন রিলস দেখে সময় নষ্ট করবেন না। রিলস আপনাকে আনন্দ দেবে, কিন্তু বাড়িওয়ালা ভাড়া চাইবে!", emoji: "🏠" },
  { topic: "জেদ", tip: "নিজের ওপর জেদ আনুন। যারা বলেছিল 'তোমাকে দিয়ে হবে না', তাদের ভুল প্রমাণ করার দায়িত্ব আপনার!", emoji: "😤" },
  { topic: "পরিবার", tip: "বাবার হোটেলে খাওয়ার মজাই আলাদা, কিন্তু নিজের টাকায় বাবাকে খাওয়ানোর তৃপ্তিটাই আসল ক্যারিয়ার!", emoji: "👨‍👦" },
  { topic: "ভবিষ্যৎ", tip: "২০২৬ সাল মানেই কম্পিটিশন। আপনি যদি না দৌড়ান, অন্য কেউ আপনার জায়গা দখল করে নেবে!", emoji: "🏃" },
  { topic: "শেষ কথা", tip: "ক্যারিয়ার না থাকলে ভালোবাসা ছেড়ে পালায়—এটা তিতা সত্য। তাই আগে নিজেকে প্রতিষ্ঠিত করুন!", emoji: "🏆" }
];

const spinningMessages = [
    "আপনার ভাগ্য পালিশ করা হচ্ছে...",
    "একটু দাঁড়ান, মশা তাড়িয়ে নিই!",
    "আপনার জন্য সেরা টিপস খুঁজছি...",
    "রিক্রুটাররা লাইনে আছে, ওয়েট করুন!",
    "সার্ভারে চা খেতে গিয়েছে, এখনই আসবে...",
    "আপনার উজ্জ্বল ভবিষ্যৎ লোড হচ্ছে..."
];

const SkillFun = () => {
  const [currentTip, setCurrentTip] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinMsg, setSpinMsg] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setCurrentTip(null);
    
    // র‍্যান্ডম মজার মেসেজ সেট করা
    setSpinMsg(spinningMessages[Math.floor(Math.random() * spinningMessages.length)]);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * funTips.length);
      setCurrentTip(funTips[randomIndex]);
      setIsSpinning(false);
    }, 2800); // ২.৮ সেকেন্ড সময় দিলাম যেন ইউজার লেখাটা পড়তে পারে
  };

  if (!mounted) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* নেয়ন ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4" /> গেমিফিকেশন জোন
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            বোরিং লাগছে? <span className="text-primary text-shadow-glow">ম্যাজিক চাকা</span> ঘুরান!
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[500px]">
          
          {/* ২. মডার্ন চাকা ডিজাইন (Neon Glow Style) */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* আউটার লেয়ার (Always Rotating) */}
            <motion.div
              animate={{ rotate: isSpinning ? 360 * 12 : 360 }}
              transition={{ 
                duration: isSpinning ? 2.8 : 30, 
                repeat: Infinity, 
                ease: isSpinning ? "circOut" : "linear" 
              }}
              className="absolute inset-0 border-[3px] border-dashed border-primary/40 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.2)]"
            />

            {/* ভেতরের রিঙ্গ (উল্টো দিকে ঘুরবে) */}
            <motion.div
              animate={{ rotate: isSpinning ? -360 * 6 : -360 }}
              transition={{ duration: isSpinning ? 3 : 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 border border-white/10 rounded-full border-t-primary/60"
            />

            <AnimatePresence mode="wait">
              {!isSpinning && !currentTip && (
                <motion.div
                  key="waiting"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={spinWheel}
                >
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-9xl mb-2 filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  >
                    😉
                  </motion.div>
                  <div className="bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full animate-bounce uppercase">
                    টাচ করুন!
                  </div>
                </motion.div>
              )}

              {isSpinning && (
                <motion.div
                  key="spinning"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    className="text-9xl mb-4"
                  >
                    🌀
                  </motion.div>
                  {/* মজার ডাইনামিক মেসেজ */}
                  <span className="font-bold text-primary text-lg md:text-xl tracking-tight animate-pulse bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                    {spinMsg}
                  </span>
                </motion.div>
              )}

              {currentTip && !isSpinning && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex flex-col items-center z-10 px-4"
                >
                  <span className="text-8xl mb-6 animate-bounce">
                    {currentTip.emoji}
                  </span>
                  
                  <div className="bg-card/30 backdrop-blur-3xl p-8 rounded-[2.5rem] border-2 border-primary/40 shadow-2xl max-w-[320px] relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-black text-white px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {currentTip.topic}
                    </div>
                    <p className="text-xl font-bold leading-[1.4] text-foreground">
                      "{currentTip.tip}"
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ৩. বাটন ডিজাইন */}
          <div className="mt-16">
            <Button
              onClick={spinWheel}
              disabled={isSpinning}
              className="group relative h-16 md:h-20 px-12 md:px-20 rounded-[2rem] bg-primary text-white text-xl md:text-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(var(--primary),0.3)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isSpinning ? <RotateCw className="animate-spin w-6 h-6" /> : <Ghost className="animate-bounce w-6 h-6" />}
                {isSpinning ? "চাকা ঘুরছে..." : "ম্যাজিক চাকা ঘুরান!"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillFun;