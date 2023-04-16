import Navbar from "@/components/Navbar";
export default function Wishlist({ likedMovies }) {

  return (
    <div>
      <Navbar/>
      <h2>My Wishlist</h2>
      <ul>
        {likedMovies && likedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}