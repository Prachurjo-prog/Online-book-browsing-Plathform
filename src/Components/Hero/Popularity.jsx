import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";

const PopularityPage = () => {
  return (
    <div className="bg-[#F9FAFA]  px-4 md:py-16 py-8 mt-9">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-black w-13 h-13 rounded-2xl flex items-center justify-center">
            <HiOutlineBookOpen className="text-3xl text-white" />
          </div>
          <div>
            <p className="font-medium text-3xl">1,200+</p>
            <p className="">Curated titles</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black w-13 h-13 rounded-2xl flex items-center justify-center">
            <FiUsers className="text-3xl text-white" />
          </div>
          <div>
            <p className="font-medium text-3xl">8,400</p>
            <p className="">Active readers</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black w-13 h-13 rounded-2xl flex items-center justify-center">
            <IoTimeOutline className="text-3xl text-white" />
          </div>
          <div>
            <p className="font-medium text-3xl">24/7</p>
            <p className="">Read anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularityPage;