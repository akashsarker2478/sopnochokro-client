"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Menu, X, Rocket, BookOpen, Users, Bell } from "lucide-react";
import Logo from "../logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "রোডম্যাপ", href: "#", icon: <Rocket className="w-4 h-4" /> },
    { name: "রিসোর্স", href: "#", icon: <BookOpen className="w-4 h-4" /> },
    { name: "মেন্টরশিপ", href: "#", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* লোগো সেকশন */}
          <div className="flex items-center">
            <Logo></Logo>
          </div>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* ডান পাশের অ্যাকশন বাটন */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 transition-all shadow-lg shadow-primary/20">
              লগইন
            </Button>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রয়ার (Mobile Menu) */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-base font-medium p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <Button className="w-full bg-primary text-white rounded-xl">লগইন</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;