import Hero from "@/Components/Hero/Hero";
import ReactFastMarquee from "@/Components/Hero/ReactFastMarquee";
import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ReactFastMarquee/>
      <Footer/>
    </div>
  );
}
