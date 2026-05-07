import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaInstagram  } from "react-icons/fa";
import { CiMail , CiTwitter} from "react-icons/ci";
import Image from "next/image";
import logo from "@/assets/logo-rem.png"


export default function Footer() {
  return (
    <footer className=" bg-[#F9FAFA]">
      <hr className="text-gray-200"/>
      <div className="mx-auto grid container gap-8  py-12 sm:px-6 md:grid-cols-3">
        
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="w-45 h-9 "/>
          </Link>
          <p className="mt-3 text-gray-600">
            A modern library, reimagined for the digital reader.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className=" font-medium">Contact Us</h4>
          <ul className="mt-3 space-y-2 ">
            <li className="flex items-center gap-2">
              <CiMail className="h-4 w-4" /> hello@pathshala.app
            </li>
            <li>123 Reading Lane, Booktown</li>
            <li>+1 (555) 010-2026</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className=" font-medium">Follow</h4>
          <div className="mt-3 flex gap-3">
            {[CiTwitter , FaInstagram , FiGithub ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60  transition hover:border-red-400 hover:text-red-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <hr className="text-gray-200"/>
      <div className=" py-4 text-center  ">
        © {new Date().getFullYear()} PathShala Library. All rights reserved.
      </div>
    </footer>
  );
}