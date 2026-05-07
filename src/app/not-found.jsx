import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-rem.png";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image width={200} height={200}
            src={logo}
            alt="PathShala Logo"
            className="h-12"
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-gray-800">404</h1>

        {/* Message */}
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Sub message */}
        <p className="mt-2 text-sm text-gray-500">
          Maybe it was moved or deleted.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}