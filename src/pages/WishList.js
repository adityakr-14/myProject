import Navbar from "@/components/Navbar";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Wishlist({ likedMovies }) {
  const { message } = useContext(Message_data);

  console.log("message", message);
  var router = useRouter();

  return (
    <div>
      <Navbar/>
      <div className="text-center bg-white pb-10">
        <p>My Wishlist</p>
      </div>
      {message && message.map((movie) => (
      <div className="container max-w-4xl mx-auto pt-6" key={movie.id}>
      <div className="px-3">
        <Image src={movie.image} width={1000} height={600} className="rounded-md" alt={movie.title} />
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.description}</p>
        <p className="text-gray-600 text-sm">Release Date: <span className="font-bold">{movie.year}</span></p>
        <button className="text-gray-600 text-sm" onClick={() => window.open(movie.trailer, '_blank')}>Play: <span className="font-bold">{movie.trailer}</span></button>
      </div>
    </div>
    ))}
    </div>
  );
}