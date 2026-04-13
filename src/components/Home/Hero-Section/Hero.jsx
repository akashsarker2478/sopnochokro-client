"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const careerData = [
    {
      src: "/hero-images/career-progress.svg",
      title: "ক্যারিয়ার গড়ার সঠিক রোডম্যাপ",
      desc: "সাফল্যের সিঁড়িতে প্রথম ধাপ কোনটি? আমাদের পূর্ণাঙ্গ গাইডলাইন আপনাকে জিরো থেকে ক্যারিয়ার গড়ার সঠিক পথ দেখাবে।",
      color: "from-blue-500/20",
    },
    {
      src: "/hero-images/code.svg",
      title: "ওয়েব ডেভেলপমেন্ট গাইডলাইন",
      desc: "একজন দক্ষ ওয়েব ডেভেলপার হওয়ার যাত্রা শুরু হোক এখান থেকে। সেরা ফ্রি রিসোর্স এবং প্রজেক্ট আইডিয়া নিয়ে আমাদের এই গাইড।",
      color: "from-purple-500/20",
    },
    {
      src: "/hero-images/uiux.svg",
      title: "ডিজাইন এবং ক্রিয়েটিভ টিপস",
      desc: "নান্দনিক ইন্টারফেস এবং ইউজার এক্সপেরিয়েন্স ডিজাইনের মূলনীতি শিখুন আমাদের স্পেশাল ডিজাইন গাইডলাইন থেকে।",
      color: "from-pink-500/20",
    },
    {
      src: "/hero-images/Data-Science.svg",
      title: "ডেটা সায়েন্স ও অ্যানালিটিক্স",
      desc: "ডেটার শক্তি ব্যবহার করে সিদ্ধান্ত নিতে শিখুন। প্রয়োজনীয় টুলস এবং এনালাইসিস শেখার পূর্ণাঙ্গ সোর্স এখানে পাবেন।",
      color: "from-teal-500/20",
    },
    {
      src: "/hero-images/Soft-Skills.svg",
      title: "প্রফেশনাল সফট স্কিলস",
      desc: "কমিউনিকেশন, টিমওয়ার্ক এবং লিডারশিপ শেখার জন্য আমাদের ফ্রি রিসোর্সগুলো আপনার ক্যারিয়ারকে করবে আরও গতিশীল।",
      color: "from-orange-500/20",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === careerData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [careerData.length]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-background overflow-hidden pt-10 md:pt-0">
      {/* Background Animated Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${careerData[index].color} to-transparent opacity-30 transition-colors duration-1000 -z-10`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* ১. ইমেজ সেকশন (মোবাইলে এটা সবার আগে এবং বড় দেখাবে) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.7, ease: "circOut" }}
                className="relative w-full aspect-square max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]"
              >
                {/* ইমেজ শ্যাডো/গ্লো */}
                <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />

                <Image
                  src={careerData[index].src}
                  alt={careerData[index].title}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ২. টেক্সট সেকশন */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left space-y-6 md:space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground tracking-tight">
                  {careerData[index].title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {careerData[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full h-14 px-10 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
              >
                রোডম্যাপ দেখুন <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-bold border-2 border-border hover:bg-secondary"
              >
                <BookOpen className="mr-2 w-5 h-5" /> ফ্রি রিসোর্স
              </Button>
            </div>

            {/* ডট ইন্ডিকেটর (ইন্টারেক্টিভ) */}
            <div className="flex justify-center lg:justify-start gap-3 pt-6">
              {careerData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`h-2.5 transition-all duration-500 rounded-full ${
                    index === idx
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
