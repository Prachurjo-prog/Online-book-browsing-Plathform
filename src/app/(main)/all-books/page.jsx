import Image from "next/image";
import Link from "next/link";

const AllBooks = async () => {
  const res = await fetch("http://localhost:3000/allbooks.json");
  const data = await res.json();
  console.log(data);
  return (
    <div className="container mx-auto md:py-12 py-5 ">
      <h2 className="text-4xl">Featured this week</h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 justify-center items-center">
        {data.map((b) => (
          <div
            key={b.bookId}
            className="items-center gap-3 rounded-2xl p-5 hover:shadow-lg transition-shadow shadow duration-300 "
          >
            
              <Image src={b.image} alt={b.bookId} width={200} height={200} />
              <div>
                <h3 className="text-xl pb-1">{b.bookName}</h3>
                <p className="line-clamp-2">{b.author}</p>
              </div>
            

            <Link href={`/all-books/${b.bookId}`}>
              <button className="btn btn-primary w-full">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
