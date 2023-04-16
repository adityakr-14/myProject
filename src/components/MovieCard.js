import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie, onLikeClick }) => {
    const handleLikeClick = () => {
        onLikeClick(movie);
      };
    
    return (
        <div className="bg-white shadow-sm rounded-md">
            <Image src={movie.image} width={700} height={800}
                className="rounded-t-md"
            />
            <div className="px-6 py-2 ">
                <div className="font-bold text-xl mb-1">{movie.title}</div>
                <span className="text-gray-700 text-base mb-1">{movie.director[0]}</span> &nbsp;&nbsp;
                <span className="text-gray-700 text-base mb-1">{movie.year}</span>
                <div className="pt-2">
                    <button onClick={handleLikeClick} >
                            <a>Like</a>
                    </button>&nbsp;&nbsp;
                    <button onClick={() => window.open(movie.trailer, '_blank')}>
                            <a>Play</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;