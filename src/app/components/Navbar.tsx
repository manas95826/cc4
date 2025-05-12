'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logos/gr.png"
                alt="Geek Room Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="w-px h-6 bg-gray-400/50"></span>
              <Image
                src="/logos/cc.png"
                alt="Code Cubicle Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link 
              href="https://code-cubicle-2.devfolio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 