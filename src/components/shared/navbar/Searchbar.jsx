"use client"; 
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <form className="relative w-full max-w-[160px] sm:max-w-[240px] md:max-w-72">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="খুঁজুন..."
        className="w-full pl-8 pr-3 py-1.5 bg-secondary/50 border border-primary/20 rounded-full text-[12px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
      />
    </form>
  );
};

export default SearchBar;