"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, BookOpen, Users, Bell, Bot } from "lucide-react";
import Logo from "../logo/Logo";
import SearchBar from "./Searchbar";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ইন্ডাস্ট্রি স্ট্যান্ডার্ড মেনু রুটস
  const navLinks = [
    { name: "রোডম্যাপ", href: "/roadmaps", icon: <Rocket className="w-4 h-4" /> },
    { name: "রিসোর্স", href: "/resources", icon: <BookOpen className="w-4 h-4" /> },
    { name: "AI মেন্টর", href: "/ai-mentor", icon: <Bot className="w-4 h-4 text-primary" /> },
    { name: "মেন্টরশিপ", href: "/mentorship", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between gap-2 md:gap-4">
          
          {/* লোগো সেকশন */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* মাঝখানের সার্চবার (মোবাইল ও ডেক্সটপ উভয় ভিউতে আপনার দেখানো গ্যাপে থাকবে) */}
          <div className="flex-1 flex justify-center max-w-[180px] sm:max-w-xs lg:max-w-md">
            <SearchBar />
          </div>

          {/* ডেস্কটপ মেনু (বড় স্ক্রিনে দেখাবে) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* ডান পাশের অ্যাকশন বাটনসমূহ */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            
            {/* থিম পরিবর্তন বাটন (আলাদা কম্পোনেন্ট) */}
            <ThemeSwitcher />

            {/* নোটিফিকেশন বেল (ডেক্সটপে দেখাবে) */}
            <Button variant="ghost" size="icon" className="hidden sm:flex relative text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background"></span>
            </Button>
            
            {/* লগইন বাটন */}
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 transition-all shadow-lg shadow-primary/20">
              লগইন
            </Button>

            {/* মোবাইল মেনু টগল বাটন */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:bg-primary/10 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রয়ার (Mobile Menu) */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background p-4 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-base font-medium p-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-border flex flex-col gap-3">
             {/* মোবাইলে বেল ও লগইন বাটন */}
            <Button variant="outline" className="w-full flex gap-2 rounded-xl">
              <Bell className="w-4 h-4" /> নোটিফিকেশন
            </Button>
            <Button className="w-full bg-primary text-white rounded-xl py-6">
              লগইন
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;