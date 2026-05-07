import Image from "next/image";
import { PiCalendarSlash } from "react-icons/pi";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/allbooks.json");
  const data = await res.json();
  console.log(data);

  console.log(id);

  const book = data.find((b) => b.bookId == id);
  console.log(book);

  return (
    <div className="mx-auto container p-10">
      <div className="flex flex-col md:flex-row items-center gap-5 max-w-5xl mx-auto justify-between ">
        <Image src={book.image} alt="dsf" width={300} height={400} />

        <div className="items-center justify-center">
          <h2 className="text-4xl font-bold pb-3">{book.bookName}</h2>
          <p className="text-lg pb-2">
            Written by{" "}
            <span className="font-semibold text-gray-500">{book.author}</span>
          </p>
          <p className="text-lg">{book.rating}</p>
          <h2 className="text-xl font-semibold pt-3 pb-3">About this book</h2>
          <p className="text-md">{book.review}</p>
          {/* <div className="flex gap-8">
                    <p>{book.totalPages}</p>
                    <p>{book.yearOfPublishing}</p>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
