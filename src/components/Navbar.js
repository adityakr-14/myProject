import { getStaticProps } from "@/pages";
import Link from "next/link";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Navbar = ({ onSearchSubmit, likedMovies }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearchSubmit(searchTerm);
    };

    return (
        <nav className="bg-yellow-700">
            <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest" style={{ display: "flex" }}>
                <div style={{ width: '100%' }}>
                    <Link href="/" className="text-base md:text-2xl">
                        Watch<span className="text-red-600">Movie</span>
                    </Link>
                </div>
                <div>
                    <form onSubmit={handleSubmit} style={{display: "flex", gap: "10px"}}>
                        <label>
                            <input type="text"  value={searchTerm} onChange={handleSearchChange} style={{color: 'black'}} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>&nbsp;&nbsp;
                <Link href="/WishList" passHref>My Wishlist ({likedMovies?.length})</Link>
            </div>
        </nav>
    );
};

export default Navbar;