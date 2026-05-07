import Hero from "@/Components/Hero/Hero";
import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
