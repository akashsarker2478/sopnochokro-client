"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import { ArrowRight, Sparkles, Map } from "lucide-react";
import Navbar from "@/components/shared/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* নেভিগেশন বার */}
     <Navbar></Navbar>

      {/* হিরো সেকশন */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        {/* একটি ছোট ব্যাজ বা হাইলাইট */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Sparkles className="w-4 h-4" />
          <span>আপনার স্বপ্নের ক্যারিয়ার শুরু হোক এখানে</span>
        </div>

        {/* মেইন হেডলাইন */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          স্বপ্ন<span className="text-primary text-glow">চক্র</span> প্রজেক্টে স্বাগতম!
        </h1>

        {/* সাব-টাইটেল (আপনার ট্যাগলাইন) */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          “আপনার ক্যারিয়ারের সঠিক মানচিত্র।” <br className="hidden md:block" /> 
          আমরা আপনাকে দিচ্ছি ইন্ডাস্ট্রি লেভেল রোডম্যাপ এবং সঠিক গাইডলাইন।
        </p>

        {/* অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/20 gap-2 transition-all hover:scale-105">
            শুরু করুন <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-primary/20 hover:bg-primary/5 gap-2">
            <Map className="w-5 h-5" /> রোডম্যাপ দেখুন
          </Button>
        </div>

        {/* একটি ডেকোরেটিভ এলিমেন্ট (ঐচ্ছিক) */}
        <div className="mt-20 relative max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-3xl border border-primary/20 bg-card shadow-2xl overflow-hidden flex items-center justify-center">
             {/* এখানে ভবিষ্যতে কোনো ড্যাশবোর্ড স্ক্রিনশট বা ভিডিও দিতে পারবেন */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/20"></div>
             <p className="text-muted-foreground italic">স্বপ্নচক্র ড্যাশবোর্ড প্রিভিউ (Coming Soon)</p>
        </div>
      </section>
    </main>
  );
}