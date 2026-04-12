import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "" }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] md:w-[200px] md:h-[65px]">
        <Image
          src="/Logo/sopnochokro.png"
          alt="স্বপ্নচক্র লোগো"
          fill 
          priority
          sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 200px"
          className="object-contain dark:invert"
        />
      </div>
    </Link>
  );
};

export default Logo;