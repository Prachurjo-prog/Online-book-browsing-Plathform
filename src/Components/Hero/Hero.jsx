import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { SiCodemagic } from "react-icons/si";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row px-4 md:mt-45 justify-between items-center gap-10 py-10">
      <div className="flex flex-col items-start gap-5">
        <p className="md:font-medium text-sm text-gray-600 shadow-sm rounded-full  flex items-center gap-2 px-3 py-1">
          <SiCodemagic className="text-orange-300" /> A modern library,
          reimagined
        </p>

        <h1 className="md:text-7xl text-3xl font-semibold">
          Find your <span className="text-[#E0843E]">next read.</span>{" "}
        </h1>
        <p className="md:text-xl text-gray-700 ">
          Borrow titles digitally from a curated collection of stories, science,
          and <br /> tech. No queues. No late fees. Just books.
        </p>
        <div className="flex items-center gap-5">
          <Link href={"/all-books"}>
            <button className="btn bg-black rounded-xl text-white px-5 flex items-center gap-2">
              Browse Now <FaArrowRight />
            </button>
          </Link>

          <Link href={"/login"}>
            <button className="btn hover:bg-[#E0843E] rounded-xl px-5 shadow-sm">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;