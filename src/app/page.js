import Hero from "@/Components/Hero/Hero";
import PopularityPage from "@/Components/Hero/Popularity";
import ReactFastMarquee from "@/Components/Hero/ReactFastMarquee";
import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/Navbar";
import Image from "next/image";
import AllBooks from "./(main)/all-books/page";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ReactFastMarquee/>
      <AllBooks/>
      <PopularityPage/>
      <Footer/>
    </div>
  );
}
