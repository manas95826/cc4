import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Cubicle 4",
  description: "Join us for Code Cubicle 4 - A Premier Hackathon Event!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-600">Code Cubicle 4</div>
              <div className="space-x-6">
                <a href="/" className="hover:text-blue-600">Home</a>
                <a href="/about" className="hover:text-blue-600">About</a>
                <a href="/schedule" className="hover:text-blue-600">Schedule</a>
                <a href="/register" className="hover:text-blue-600">Register</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Code Cubicle 4</h3>
                <p className="text-gray-400">Join us for an amazing coding experience!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="/schedule" className="text-gray-400 hover:text-white">Schedule</a></li>
                  <li><a href="/register" className="text-gray-400 hover:text-white">Register</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Email: contact@codecubicle.com</p>
                <p className="text-gray-400">Location: Microsoft Office, Hyderabad</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 Code Cubicle 4. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
